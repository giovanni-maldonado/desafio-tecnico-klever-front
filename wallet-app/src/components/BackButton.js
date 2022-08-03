import React from 'react'
import '../styles/BackButtonStyle.css'
import { Link } from 'react-router-dom'

export default function voltar() {
  return (
    <Link to='/'>
      <button className="back-button">
        Voltar
      </button>
    </Link>
  )
}
