import React from 'react'
import '../styles/HomeStyle.css'
import AddButton from '../components/AddButton'
import { ReactComponent as LogoIcon } from '../assets/logo.svg'
import { ReactComponent as StarIcon } from '../assets/shooting-star.svg'

export default function Home() {
  return (
    <div className="home-content">
      <LogoIcon className="icon-logo"/>
      <div className="wish-and-button">
        <StarIcon className="star-icon" fill="#EEFB40"/>
        <h2>Wish Wallet</h2>
        <AddButton />
      </div>
      <ul>
        Tokens
      </ul>
    </div>
  )
}
