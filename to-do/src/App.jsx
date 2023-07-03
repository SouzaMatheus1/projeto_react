import { useState } from 'react'
import Afazer, { AFazer } from './components/AFazer'
import AFazerForm from './components/AFazerForm';
import Search from './components/Search';
import Filter from './components/Filter';
import './App.css'
import Axios from "axios"

function App() {
  const [aFazeres, setFazer] = useState([
    // {
    //   id: 1,
    //   text: " Criar funcionalidade X no sistema ",
    //   category: "Trabalho",
    //   isCompleted: false,
    // },
  ]);

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = (value) => {
    Axios.post("http://localhost:3001/", {
      id: values.id,
      text: values.text,
      category: values.text,
      isCompleted: values.isCompleted,
    }).then((response) => {
      console.log(response)
    })
  }

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

  const [filter,setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  // Tela principal
  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      {/* Caixa de pesquisa */}
      <Search search='search' setPesquisa={setPesquisa}/>
      {/* Filtro */}
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="afazer-list">
        {/* Filtro de completas e incompletas */}
        {aFazeres
        .filter((aFazer) => 
          filter === "All" 
          ? true 
          : filter === "Completed" 
          ? aFazer.isCompleted 
          : !aFazer.isCompleted 
        )
        // Filtro de pesquisa por texto
        .filter((aFazer) =>
          aFazer.text.toLowerCase().includes(pesquisa.toLowerCase()))
          .sort((a, b) =>
            sort === "Asc"
            ? a.text.localeCompare(b.text)
            : b.text.localeCompare(a.text))
            .map((aFazer) => (
              <AFazer 
                key={aFazer.id}
                aFazer = {aFazer}
                removeaFazer={removeaFazer}
                completeaFazer={completeaFazer}
              />
            ))
        }
        {/* Adicionar tarefas à lista */}
      </div>
      <AFazerForm addaFazer={addaFazer} />
    </div>
  )
}

export default App
