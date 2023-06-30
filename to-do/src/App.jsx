import { useState } from 'react'
import Afazer, { AFazer } from './components/AFazer'
import AFazerForm from './components/AFazerForm';
import Search from './components/Search';
import './App.css'

function App() {
  const [aFazeres, setFazer] = useState([
    // {
    //   id: 1,
    //   text: " Criar funcionalidade X no sistema ",
    //   category: "Trabalho",
    //   isCompleted: false,
    // },
    // {
    //   id: 2,
    //   text: "Ir para academia",
    //   category: "Pessoal",
    //   isCompleted: false,
    // },
    // {
    //   id: 3,
    //   text: "Estudar react",
    //   category: "Estudo",
    //   isCompleted: false,
    // },
  ]);

  // Adicionar tarefa
  const addaFazer = (text, category) => {
    const novoaFazer = [...aFazeres, {
        id: Math.floor(Math.random() * 1000),
        text: text,
        category,
        isCompleted: false,
      },
    ];

    setFazer(novoaFazer);
  }
  // Remover tarefa
  const removeaFazer = (id) => {
    const novoaFazer = [...aFazeres,];
    const filtroaFazer = novoaFazer.filter((aFazer) => 
      aFazer.id !== id ? aFazer : null
    );

    setFazer(filtroaFazer);
  };
  // Completar tarefa
  const completeaFazer = (id) => {
    const novoaFazer = [...aFazeres,];
    novoaFazer.map((aFazer) => aFazer.id === id ? aFazer.isCompleted = !aFazer.isCompleted : aFazer);

    setFazer(novoaFazer);
  }

  const [pesquisa, setPesquisa] = useState("");

  // Tela principal
  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <Search setPesquisa={setPesquisa}/>
      {console.log(setPesquisa, pesquisa)}
      <div className="afazer-list">
        {aFazeres.filter((aFazer) =>
          aFazer.text.toLowerCase().includes(pesquisa.toLowerCase()))
            .map((aFazer) => (
              <AFazer 
                key={aFazer.id}
                aFazer = {aFazer}
                removeaFazer={removeaFazer}
                completeaFazer={completeaFazer}
              />
            ))
        }
      </div>
      <AFazerForm addaFazer={addaFazer} />
    </div>
  )
}

export default App
