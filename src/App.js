import React, { useState } from "react";
import "./App.css";
import { Button, Form } from 'react-bootstrap';

function Todo({ todo, index, completeTodo, removeTodo}) {
  return (
    <div>
      <ul>
        <li style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
         {todo.text}
         {/* <button onClick={() => completeTodo(index)}>Complete</button>
         <button onClick={() => removeTodo(index)}>X</button> */}
          <Button variant="primary" size="sm" onClick={() => completeTodo(index)}>Completed</Button>{' '}
          <Button variant="danger" size="sm" onClick={() => removeTodo(index)}>x</Button>
        </li>
      </ul>
      
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
     {/* <button onClick = {handleSubmit} >Add</button> */}
     <Button variant="primary" size="sm" onClick = {handleSubmit}>
     Add
    </Button>{' '}
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted ^= true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  let completeItems = todos.filter(function(item) {
    return item.isCompleted !== 1;
  });

  return (
    <div className="app">
      <div className="todo-list">
       <TodoForm addTodo={addTodo} />
       <p className="task-counter">{completeItems.length} remaining out of {todos.length} tasks</p>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        
      </div>
    </div>
  );
}

export default App;