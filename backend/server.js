const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let tasks = [];

// CREATE
app.post("/tasks", (req, res) => {
  const newTask = {
    id: Date.now(),
    title: req.body.title,
    completed: false
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

// READ
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// DELETE
app.delete("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);

  tasks = tasks.filter(task => task.id !== id);

  res.json({ message: "Tarefa deletada com sucesso" });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

app.patch("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);

  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ message: "Tarefa não encontrada" });
  }

  // atualiza apenas os campos enviados
  Object.assign(task, req.body);

  res.json(task);
});