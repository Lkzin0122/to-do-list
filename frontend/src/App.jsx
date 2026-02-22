import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

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
            <p className="titulo">{task.title}</p>
            <p className={`Status ${task.completed ? "concluida" : "pendente"}`}>
              {task.completed ? "✅ Concluída" : "⏳ Pendente"}
            </p>
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