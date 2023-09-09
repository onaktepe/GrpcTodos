import * as React from 'react';
import TodoList from './TodoList';
import { useNavigate } from 'react-router-dom';


const Home = (props) => {
    const navigate = useNavigate();

    return(
        <div style={{borderColor: "blue", borderWidth: 1, borderStyle : 'solid'}}>
            <button onClick={()=> navigate('/addTodo')}> Add Todo</button>
            <br />
            <TodoList />
        </div>
    )
}

export default Home;