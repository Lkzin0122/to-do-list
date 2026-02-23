import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './Login.css'
import App from './App.jsx'
import About from './Login.jsx'

function Login() {
  return (
    <div className='Container'>
      <form action=""></form>
      <input type="email" className="email-input" placeholder='Email'/>
      <input type="password" className="password-input" placeholder='Password'/>
      <button className="login-button">Entrar</button>
    </div>
  );
}

export default Login;
