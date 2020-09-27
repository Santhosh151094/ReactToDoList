import React, { useState } from "react";
import "./App.css";

function Todo({ todo, index, completeTodo }) {
  //console.log("completeTodo",index);
  //console.log("todo.isCompleted",todo)
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
      <ul>
        <li onClick={() => completeTodo(index)} className={ todo.isCompleted ? "is-done" : "" }>{todo.text}</li>
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
      <button onClick = {handleSubmit} >Add</button>
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  let completeItems = todos.filter(function(item) { 
    return item.isCompleted !== true;
  });
  import React, { useState } from "react";
  import "./App.css";
  
  function Todo({ todo, index, completeTodo }) {
    //console.log("completeTodo",index);
    //console.log("todo.isCompleted",todo)
    return (
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
        <ul>
          <li onClick={() => completeTodo(index)} className={ todo.isCompleted ? "is-done" : "" }>{todo.text}</li>
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
        <button onClick = {handleSubmit} >Add</button>
      </form>
    );
  }
  
  function App() {
    const [todos, setTodos] = useState([
    ]);
  
    const addTodo = text => {
      const newTodos = [...todos, { text }];
      setTodos(newTodos);
    };
  
    const completeTodo = index => {
      const newTodos = [...todos];
      newTodos[index].isCompleted = true;
      setTodos(newTodos);
    };
  
    let completeItems = todos.filter(function(item) { 
      return item.isCompleted !== true;
    });
  
    console.log("completeItems",completeItems);
  
    return (
      <div className="app">
        <div className="todo-list">
        <TodoForm addTodo={addTodo} />
        <p>{completeItems.length} remaining out of {todos.length} tasks</p>
          {todos.map((todo, index) => (
            // console.log(todos.find(o => o.isCompleted === true)),
            // console.log("tooos",todos),
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
            />
          ))}
          
        </div>
      </div>
    );
  }
  
  export default App;
  console.log("completeItems",completeItems);

  return (
    <div className="app">
      <div className="todo-list">
      <TodoForm addTodo={addTodo} />
      <p>{completeItems.length} remaining out of {todos.length} tasks</p>
        {todos.map((todo, index) => (
          // console.log(todos.find(o => o.isCompleted === true)),
          // console.log("tooos",todos),
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
          />
        ))}
        
      </div>
    </div>
  );
}

export default App;