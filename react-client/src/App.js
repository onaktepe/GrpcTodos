import './App.css';
import Home from './Home';
import AddTodo from './AddTodo';
import EditTodo from './EditTodo';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/addTodo" element={<AddTodo />} />
        <Route path="/editTodo/:id" element={<EditTodo />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
