import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const läggTillTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  return (
    <div>
      <h1>Todo-lista</h1>
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ny uppgift"
      />
      <button onClick={läggTillTodo}>Lägg till</button>
      
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;