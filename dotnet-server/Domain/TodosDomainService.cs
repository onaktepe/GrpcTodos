using System;
using Google.Protobuf.WellKnownTypes;

namespace GrpcTodos.Server.Domain;

public class TodosDomainService 
{

    private static List<TodoEntity> _data = new List<TodoEntity>();
    private static int _lastId = 0;

    public EmptyModel AddTodo(AddTodoRequest request)
    {
         _lastId = _lastId + 1;
        var entity = new TodoEntity{
            Id = _lastId,
            Name = request.Name,
            Priority = request.Priority,
            Status = "N",
            CreatedDate = DateTime.Now,
            CreatedBy = "SA"
        };

        _data.Add(entity);
        
        return new EmptyModel();
    }

    public EmptyModel UpdateTodo(UpdateTodoRequest request)
    {
        var entity = _data.Find(p => p.Id == request.Id)
            ?? throw new ArgumentNullException(nameof(request));

        entity.Name = request.Name;
        entity.Priority = request.Priority;
        
        return new EmptyModel();
    }

    public EmptyModel DeleteTodo(IdModel id)
    {
        var idx = _data.FindIndex(p=> p.Id == id.Id);
        if(idx < 0) throw new ArgumentOutOfRangeException(nameof(idx));
        
        _data.RemoveAt(idx);

        return new EmptyModel();
    }

    public TodosResponse GetTodos(EmptyModel request)
    {
        var result = new TodosResponse();

        _data.ForEach(p => result.Todos.Add(new TodoModel{
            Id = p.Id,
            Name = p.Name,
            Priority = p.Priority,
            Status = p.Status?? ""
        }));
       
        return result;
    }

    public TodoDetailResponse GetTodo(IdModel id)
    {
        var entity = _data.Find(p => p.Id == id.Id)?? throw new ArgumentNullException(nameof(id));
       
        return new TodoDetailResponse{
            Id = entity.Id,
            Name = entity.Name,
            Priority = entity.Priority,
            Status = entity.Status ?? "",
            CreatedBy = entity.CreatedBy ?? "",
            CreatedDate = entity.CreatedDate.Year < 1900 ? null: Timestamp.FromDateTimeOffset(entity.CreatedDate) 
        };

    }

}