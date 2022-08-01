import React from 'react'
import '../styles/HomeStyle.css'
import AddButton from '../components/AddButton'

export default function Home() {
  return (
    <div className="home-content">
      <h1>klever</h1>
      <div>
        <h2>Wish Wallet</h2>
        <AddButton />
      </div>
      <ul>
        Tokens
      </ul>
    </div>
  )
}
