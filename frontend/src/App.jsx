import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState("todas");

  const filteredTasks = tasks.filter(task => {
    if (filter === "pendentes") return !task.completed;
    if (filter === "concluidas") return task.completed;
    return true;
  });

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
        <h1 className="title">Todo-List</h1>
        <h2 className="subtitle">Minhas tarefas</h2>
      </header>

      <main className="filter">
        <button className="filter-button" onClick={() => setFilter("pendentes")}>Pendentes</button>
        <button className="filter-button" onClick={() => setFilter("concluidas")}>Concluídas</button>
        <button className="filter-button" onClick={() => setFilter("todas")}>Todas</button>
        
      </main>
      <main className="tasks">
        {filteredTasks.map(task => (
          <div key={task.id} className="task">
            <button className="delete-button" onClick={() => fetch(`http://localhost:8080/tasks/${task.id}`, { method: "DELETE" }).then(() => setTasks(tasks.filter(t => t.id !== task.id)))}>🗑️</button>

            <p className={`tarefa ${task.completed ? "tarefa-concluida" : ""}`}>{task.title}</p>
            <p className={`Status ${task.completed ? "concluida" : "pendente"}`}>
              {task.completed ? "Concluída" : "Pendente" }
            </p>
            <input 
              type="checkbox" 
              checked={task.completed} 
              onChange={() => handleToggle(task.id, task.completed)}
              className="checkbox"
            />
            <button className="edit" onClick={() => {
              const newTitle = prompt("Digite o novo título da tarefa:", task.title);
              if (newTitle) {
                fetch(`http://localhost:8080/tasks/${task.id}`, {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ title: newTitle }),
                }).then(() => {
                  setTasks(tasks.map(t => t.id === task.id ? { ...t, title: newTitle } : t));
                });
              }
            }}>
              ✏️
            </button>

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