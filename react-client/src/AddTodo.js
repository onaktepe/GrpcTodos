import { useState } from "react";
import { TodosClient } from './protos/TodosServiceClientPb.ts'
import { EmptyModel, AddTodoRequest } from './protos/todos_pb.js'
import { useNavigate } from "react-router-dom";

const AddTodo = (props) => {
    const todosClient = new TodosClient('http://localhost:8080')
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [priority, setPriority] = useState(1);

    const nameChanged = (event) => {
        setName(event.target.value);
    }

    const priorityChanged = (event) => {
        setPriority(event.target.value);
    }

    const save = () => {
        var req = new AddTodoRequest();
        req.setName(name);
        req.setPriority(priority);

        todosClient.addTodo(req).then(response => {
            console.log("addTodo response-->", response);
            navigate("/");
        }).catch( err => {
            console.log("addTodo err->", err);
        });



    }
    const priorityOptions = Array.from(Array(10).keys()).map((item,index) => 
        <option key={(item+1).toString()} value={item+1}>{(item+1).toString()}</option> 
    );

    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            Name
                        </td>
                        <td>
                            <input id="name" type="text" onChange={nameChanged}></input>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Priority
                        </td>
                        <td>
                        <select id="priority" onChange={priorityChanged} value={priority}>
                            {priorityOptions}
                        </select>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={2}>
                            <button onClick={save}>Save</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default AddTodo;