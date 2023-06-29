import { useState } from 'react'
import Afazer, { AFazer } from './components/AFazer'
import AFazerForm from './components/AFazerForm';
import './App.css'

function App() {
  const [aFazeres, setFazer] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar react",
      category: "Estudo",
      isCompleted: false,
    },
  ]);

  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <div className="afazer-list">
        {aFazeres.map((aFazer) => (
          <AFazer aFazer = {aFazer} />
        ))}
      </div>
      <AFazerForm />
    </div>
  )
}

export default App
