import React from 'react'
import '../styles/AddButtonStyle.css'
import { Link } from 'react-router-dom'

export default function AddButton() {
  return (
    <Link to="/add-token">
      <button>
        Add Token
      </button>
    </Link>
  )
}
