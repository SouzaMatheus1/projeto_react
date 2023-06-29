import React from 'react'

export const AFazer = ({aFazer}) => {
  return (
    <div className="aFazer">
    <div className="texto">
      <h3>Titulo: {aFazer.text}</h3>
      <p className="category">Categoria: {aFazer.category}</p>
    </div>

    <div>
      <button className="complete">Completar</button>
      <button className="remove">X</button>
    </div>
  </div>
  )
}

export default AFazer