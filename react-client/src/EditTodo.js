import { useEffect, useState } from "react";
import { TodosClient } from './protos/TodosServiceClientPb.ts'
import { UpdateTodoRequest, IdModel } from './protos/todos_pb.js'
import { useNavigate, useParams } from "react-router-dom";

const EditTodo = (props) => {

    const todosClient = new TodosClient('http://localhost:8080')
    const [name, setName] = useState("");
    const [priority, setPriority] = useState(1);

    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        var req = new IdModel();
        req.setId(id);
        todosClient.getTodo(req).then(response => {
            console.log("getTodo response->", response);

            setName(response.getName());
            setPriority(response.getPriority());
        }).catch(err => {
            console.log("getTodo error->", err);
        });

    }, [])

    const nameChanged = (event) => {
        setName(event.target.value);
    }

    const priorityChanged = (event) => {
        setPriority(event.target.value);
    }

    const save = () => {
        var req = new UpdateTodoRequest();
        req.setId(id);
        req.setName(name);
        req.setPriority(priority);

        todosClient.updateTodo(req).then(response => {
            console.log("updateTodo response-->", response);
            navigate("/");
        }).catch( err => {
            console.log("updateTodo err->", err);
        });
    }

    const priorityOptions = Array.from(Array(10).keys()).map((item,index) => 
        <option key={(item+1).toString()} value={item+1}>{(item+1).toString()}</option> 
    );

    return(
        <div>
            <span>Edit Todo</span>
            <table>
                <tbody>
                    <tr>
                        <td>
                            Name
                        </td>
                        <td>
                            <input id="name" type="text" onChange={nameChanged} value={name}></input>
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

export default EditTodo;