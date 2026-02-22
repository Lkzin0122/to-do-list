import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  return (
    <div>

      <h1 className="title">To-do-List</h1>
      <h2 className="subtitle">Minhas tarefas</h2>

      {tasks.map(task => (
        <p key={task.id}>{task.title}</p>
      ))
      }
      {tasks.map(task => (
        <p className={`Status ${task.completed ? "concluida" : "pendente"}`} key={task.id}>{task.completed ? "Concluída" : "Pendente"}</p>
      ))
      }

      <form action="">
        <input type="text" placeholder="Nova tarefa" />
        <button type="submit" className="Bottom">Adicionar</button >

      </form>
    </div>
  );
}

export default App;