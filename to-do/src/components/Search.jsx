// import React from 'react'
import { useState } from 'react'

const Search = ({pesquisa, setPesquisa}) => {
  return (
    <div className="procura">
        <h2>Pesquisar:</h2>
        <input
            type="text"
            placeholder="Digite para pesquisar..."
            onChange={(e) => setPesquisa(e.target.value)}
            value={pesquisa}
        />
    </div>
  )
}

export default Search