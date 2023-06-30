import React from 'react'

export const AFazer = ({aFazer, removeaFazer, completeaFazer}) => {
  return (
    <div className="aFazer" style={{textDecoration: aFazer.isCompleted ? "line-through" : "", textDecorationThickness: "2px" }}>
      <div className="texto">
        <h3>&nbsp;{aFazer.text}&nbsp;</h3>
        <p className="category">({aFazer.category})</p>
      </div>

      <div>
        <button className="complete" onClick={() => completeaFazer(aFazer.id)}>Completar</button>
        <button className="remove" onClick={() => removeaFazer(aFazer.id)}>X</button>
      </div>
    </div>
  )
}

export default AFazer