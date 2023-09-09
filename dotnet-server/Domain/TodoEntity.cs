namespace GrpcTodos.Server.Domain;

public class TodoEntity {
    public int Id { get; set; }
    public string Name { get; set; }
    public int Priority { get; set; }
    public string Status { get; set; }
    public DateTime CreatedDate { get; set; }
    public string CreatedBy { get; set; }
}