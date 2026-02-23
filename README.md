# ✅ To-Do List - Full Stack Application

Aplicação **Full Stack To-Do List** desenvolvida para gerenciamento de tarefas, permitindo criar, visualizar, atualizar e remover atividades de forma simples e eficiente.

O projeto é composto por:

- 🔙 **Backend** desenvolvido com **Spring Boot**
- 💻 **Frontend** desenvolvido com **React**
- 🐳 Containerização utilizando **Docker**

A aplicação segue o padrão de arquitetura **cliente-servidor**, onde o frontend consome uma **API REST** responsável pelo gerenciamento das tarefas.

---

## 🚀 Funcionalidades

- ✅ Criar tarefas  
- 📄 Listar tarefas  
- ✏️ Atualizar tarefas  
- ❌ Remover tarefas  
- 🔎 Buscar tarefa por ID  
- 🌐 Integração Frontend + Backend  
- 🔄 Atualização dinâmica da interface  

---

## 🏗️ Arquitetura da Aplicação

```text
React (Frontend)
        ↓ HTTP Requests
Spring Boot API (Backend)
        ↓
Banco de Dados
```

---

## 🛠️ Tecnologias Utilizadas

### 🔙 Backend
- Java 17  
- Spring Boot  
- Spring Web  
- Spring Data JPA  
- Gradle  
- H2 Database / MySQL  

### 💻 Frontend
- React  
- JavaScript (ES6+)  
- HTML5  
- CSS3  
- Axios / Fetch API  

### ⚙️ DevOps
- Docker  

---

## 📦 Como Executar o Projeto

---

### ▶️ Backend (Spring Boot)

Acesse a pasta do backend:

```bash
cd backend
```

Execute a aplicação:

#### Windows
```bash
.\gradlew bootRun
```

#### Linux / Mac
```bash
./gradlew bootRun
```

Backend disponível em:

```text
http://localhost:8080
```

---

### 💻 Frontend (React)

Acesse a pasta do frontend:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Execute a aplicação:

```bash
npm start
```

Frontend disponível em:

```text
http://localhost:3000
```

---

## 🐳 Executando com Docker

Build da aplicação:

```bash
docker build -t todo-list .
```

Executar container:

```bash
docker run -p 8080:8080 todo-list
```

API disponível em:

```text
http://localhost:8080
```

---

## 📌 Endpoints Principais

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/tasks` | Lista todas as tarefas |
| GET | `/tasks/{id}` | Busca tarefa por ID |
| POST | `/tasks` | Cria uma nova tarefa |
| PUT | `/tasks/{id}` | Atualiza uma tarefa |
| DELETE | `/tasks/{id}` | Remove uma tarefa |

---

## 📁 Estrutura do Projeto

```text
project-root/
│
├── backend/
│   ├── src/
│   ├── build.gradle
│   └── gradlew
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── Dockerfile
```

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com o objetivo de praticar:

- Desenvolvimento Full Stack  
- Construção de APIs REST  
- Arquitetura em camadas  
- Integração entre frontend e backend  
- Persistência de dados com JPA  
- Containerização com Docker  
- Boas práticas de desenvolvimento  

---

## 👨‍💻 Autor

Desenvolvido por **Lucas Bitencourt** 🚀
