import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ResultState from "./context/resultstate";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ResultState>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </ResultState>
)
