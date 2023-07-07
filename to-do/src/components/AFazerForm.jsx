import React from 'react'
import { useState } from 'react'
import AFazer from './AFazer';
import axios from "axios"

export const AFazerForm = ({addaFazer}) => {
    const [value,setValue] = useState("");
    const [category,setCategory] = useState("");

    const handleSubmit = (e) =>{
      e.preventDefault();
      if(!value || !category) return;
      addaFazer(value, category);
      setCategory("");
      setValue("");

      axios.post("/register", AFazer)
      .then(response => {
        console.log(response.data);
        setFazer([...AFazer, addaFazer]);
      })
        .catch(error =>{
          console.log("ERRO");
          console.error(error)
        });
    };

  return (
    <div className="aFazerForm">
        <h2>Criar tarefa</h2>
        <form onSubmit={handleSubmit}>
            <input
              type = "text"
              value = {value}
              placeholder = "Digite o título"
              onChange = {(e) => setValue(e.target.value)}
            />
            <select 
            id = 'categoria_bd'
            value={category} 
            onChange={(e) => 
            setCategory(e.target.value)}>

                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            {/* onClick={handleSubmit} */}
            <button type="submit">Criar tarefa</button>
        </form>
    </div>
  )
}

export default AFazerForm