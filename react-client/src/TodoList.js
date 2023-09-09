import { useEffect, useState } from "react";
import { TodosClient } from './protos/TodosServiceClientPb.ts'
import { EmptyModel, IdModel } from './protos/todos_pb.js'
import { useNavigate, Link } from 'react-router-dom';

const todosClient = new TodosClient('http://localhost:8080')

const TodoList = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadTodos();
    }, []);

    
    const loadTodos = () => {
        var req = new EmptyModel();
        todosClient.getTodos(req).then(response => {
            console.log("getTodos response-->", response);
            var tmpData = response.getTodosList();
            console.log("getTodos getTodosList-->", tmpData);
            setData(tmpData);

        }).catch( err => {
            console.log("getTodos error->", err);
        });
    }

    const deleteTodo = (item) => {
        var req = new IdModel();
        req.setId(item.getId());

        todosClient.deleteTodo(req).then(response => {
            console.log("deleteTodo response-->", response);
            loadTodos()
        }).catch( err => {
            console.log("deleteTodo error->", err);
        });

    }

    const trItems = data.map((item, index) =>
        <tr key={item.getId()}>
            <td>{item.getId()}</td> 
            <td>{item.getName()}</td> 
            <td>{item.getStatus()}</td> 
            <td>
                <Link to={`editTodo/${item.getId()}`}>Edit</Link>{' '}
                <button id="btnDelete" onClick={()=>deleteTodo(item)}>Delete</button>
            </td>
        </tr>
    );
    
    return(
        <div>
            <h2>Todos</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {trItems}
                </tbody>
            </table>
           
        </div>
    )
}

export default TodoList;