import React from 'react'
import BackButton from '../components/BackButton'
import Token from '../components/Token'
import { ReactComponent as StarIcon } from '../assets/shooting-star.svg'
import { ReactComponent as LogoIcon } from '../assets/logo.svg'

export default function EditTokenPage() {
  return (
    <div className="add-token-page-content">
      <LogoIcon className="icon-logo"/>
      <div className="wish-wallet">
        <StarIcon className="star-icon" fill="#EEFB40"/>
        <h2>Wish Wallet</h2>
      </div>
      <div className='add-token-tittle'>
        <h1>Add Token</h1>
        <BackButton />
      </div>
      <Token />
    </div>
  )
}
