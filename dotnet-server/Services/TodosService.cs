using Grpc.Core;
using GrpcTodos.Server.Domain;

namespace GrpcTodos.Server.Services;

public class TodosService : Todos.TodosBase
{
    private readonly ILogger<TodosService> _logger;
    private readonly TodosDomainService _todosDomainService;
    public TodosService(ILogger<TodosService> logger)
    {
        _logger = logger;
        _todosDomainService = new TodosDomainService();
    }

    public override Task<EmptyModel> AddTodo(AddTodoRequest request, ServerCallContext context)
    {
        var result = _todosDomainService.AddTodo(request);
        return Task.FromResult(result);
    }

    public override Task<EmptyModel> UpdateTodo(UpdateTodoRequest request, ServerCallContext context)
    {
        var result = _todosDomainService.UpdateTodo(request);
        return Task.FromResult(result);
    }

    public override Task<EmptyModel> DeleteTodo(IdModel id, ServerCallContext context)
    {
        var result = _todosDomainService.DeleteTodo(id);
        return Task.FromResult(result);
    }

    public override Task<TodosResponse> GetTodos(EmptyModel request, ServerCallContext context)
    {
        var result = _todosDomainService.GetTodos(request);
        return Task.FromResult(result);
    }

    public override Task<TodoDetailResponse> GetTodo(IdModel id, ServerCallContext context)
    {
        var result = _todosDomainService.GetTodo(id);
        return Task.FromResult(result);
    }

}