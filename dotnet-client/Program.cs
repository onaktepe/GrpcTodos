using System.Threading.Tasks;
using Grpc.Net.Client;
using GrpcTodos.Client;

// The port number must match the port of the gRPC server.
using var channel = GrpcChannel.ForAddress("http://localhost:5133");
var client = new Todos.TodosClient(channel);
while(true)
{
    Console.Write(@"Select command
        L:GetTodos,
        F:FindTodo,
        A:Add Todo,
        U:Update Todo,
        D:Delete Todo
        E,Q:Delete Todo
    ");

    var key = Console.ReadKey();
    switch (key.KeyChar.ToString().ToUpper())
    {
        case "L":
            CallGetTodos(client);
            break;

        case "F":
            CallGetTodo(client);
            break;

        case "A":
            AddTodo(client);
            break;

        case "U":
            UpdateTodo(client);
            break;
        
        case "D":
            DeleteTodo(client);
            break;
        
        case "E":
        case "Q":
            return;
        
    }
}


static void CallGetTodos(Todos.TodosClient client)
{
    Console.WriteLine("");
    var todosResponse = client.GetTodos(new EmptyModel());
    foreach (var todoItem in todosResponse.Todos)   
    {
        Console.WriteLine($"Todo--> Id: {todoItem.Id}, Name:{todoItem.Name}, Status:{todoItem.Status}");
    }
}

static void CallGetTodo(Todos.TodosClient client)
{
    Console.WriteLine("");
    Console.Write(@"Enter Id:");
    var idStr = Console.ReadLine();
    int.TryParse(idStr, out var idVal);

    var todoItem = client.GetTodo(new IdModel{Id = idVal});
    Console.WriteLine($"Todo--> Id: {todoItem.Id}, Name:{todoItem.Name}, Status:{todoItem.Status}");
}

static void AddTodo(Todos.TodosClient client)
{
    Console.WriteLine("");
    Console.Write(@"Enter Name:");
    var name = Console.ReadLine();
    
    Console.Write(@"Enter Priority:");
    var priorityStr = Console.ReadLine();
    int.TryParse(priorityStr, out var priorityVal);

    var emptyModel = client.AddTodo(new AddTodoRequest{Name = name, Priorty = priorityVal});
    Console.WriteLine("Todo Added");
}

static void UpdateTodo(Todos.TodosClient client)
{
    Console.WriteLine("");
    Console.Write(@"Enter Id:");
    var idStr = Console.ReadLine();
    int.TryParse(idStr, out var idVal);

    Console.Write(@"Enter Name:");
    var name = Console.ReadLine();
    
    Console.Write(@"Enter Priority:");
    var priorityStr = Console.ReadLine();
    int.TryParse(priorityStr, out var priorityVal);

    var emptyModel = client.UpdateTodo(new UpdateTodoRequest{Id = idVal, Name = name, Priorty = priorityVal});
    Console.WriteLine("Todo Added");
}

static void DeleteTodo(Todos.TodosClient client)
{
    Console.WriteLine("");
    Console.Write(@"Enter Id");
    var idStr = Console.ReadLine();
    int.TryParse(idStr, out var idVal);

    var emptyModel = client.DeleteTodo(new IdModel{Id = idVal});
    Console.WriteLine("Todo Deleted");
}