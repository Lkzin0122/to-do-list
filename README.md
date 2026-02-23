# 📋 To-Do List API

Sistema **To-Do List** desenvolvido para gerenciamento de tarefas, permitindo criar, visualizar, atualizar e remover atividades de forma simples e eficiente.

O projeto foi construído utilizando **Java** com o framework Spring Boot, seguindo o padrão de arquitetura REST, com foco em boas práticas de desenvolvimento backend e organização de código.

A aplicação disponibiliza uma **API RESTful** responsável pelo controle completo das tarefas, possibilitando operações CRUD (*Create, Read, Update e Delete*).

---

## 🚀 Funcionalidades

- ✅ Criar novas tarefas  
- 📄 Listar todas as tarefas  
- 🔎 Buscar tarefa por ID  
- ✏️ Atualizar tarefas existentes  
- ❌ Remover tarefas  
- 🌐 API RESTful  

---

## 🛠️ Tecnologias Utilizadas

- Java 17  
- Spring Boot  
- Gradle  
- Spring Web  
- Spring Data JPA  
- H2 Database / MySQL  
- Docker  

---

## 📦 Como Executar o Projeto

### ▶️ Executando localmente

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/todo-list.git

## 📦 Como Executar o Projeto

### ▶️ Executando localmente

Acesse a pasta do projeto:

```bash
cd todo-list
```

Execute a aplicação:

#### 🪟 Windows
```bash
.\gradlew bootRun
```

#### 🐧 Linux / 🍎 Mac
```bash
./gradlew bootRun
```

A aplicação estará disponível em:

```text
http://localhost:8080
```

---

## 🐳 Executando com Docker

### Build da imagem

```bash
docker build -t todo-list .
```

### Executar container

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
src/
 ├── controller
 ├── service
 ├── repository
 ├── model
 └── TodoListApplication
```

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com o objetivo de praticar:

- Desenvolvimento de APIs REST com Spring Boot  
- Arquitetura em camadas  
- Persistência de dados com JPA  
- Containerização utilizando Docker  
- Boas práticas no desenvolvimento backend  
