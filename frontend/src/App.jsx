import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/tasks")
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  const handleToggle = async (id, completed) => {
    await fetch(`http://localhost:8080/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: !completed }),
    });

    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !completed } : task
    ));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8080/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    const newTask = await response.json();
    setTasks([...tasks, newTask]);
    setTitle("");
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">To-do-List</h1>
        <h2 className="subtitle">Minhas tarefas</h2>
      </header>

      <main className="tasks">
        {tasks.map(task => (
          <div key={task.id} className="task">
            <button className="delete-button" onClick={() => fetch(`http://localhost:8080/tasks/${task.id}`, { method: "DELETE" }).then(() => setTasks(tasks.filter(t => t.id !== task.id)))}>🗑️</button>

            <p className="titulo">{task.title}</p>
            <p className={`Status ${task.completed ? "concluida" : "pendente"}`}>
              {task.completed ? "✅ Concluída" : "⏳ Pendente"}
            </p>
            <input 
              type="checkbox" 
              checked={task.completed} 
              onChange={() => handleToggle(task.id, task.completed)}
              className="checkbox"
            />
          </div>
        ))}
      </main>

      <footer className="footer">
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" className="texto" placeholder="Digite uma nova tarefa" value={title} onChange={(e) => setTitle(e.target.value)} />
          <button type="submit" className="Bottom">Adicionar</button>
        </form>
      </footer>
    </div>
  );
}


export default App;