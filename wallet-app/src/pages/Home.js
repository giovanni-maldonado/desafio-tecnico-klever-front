import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/HomeStyle.css'
import AddButton from '../components/AddButton'
import { ReactComponent as LogoIcon } from '../assets/logo.svg'
import { ReactComponent as StarIcon } from '../assets/shooting-star.svg'
import EditIcon from '../assets/edit-icon.png'

export default function Home() {
  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      localStorage.setItem('token', '[]')
    }
    if (localStorage.getItem('balance') === null) {
      localStorage.setItem('balance', '[]')
    }
  }, [])

  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem('token'))
  const balance = JSON.parse(localStorage.getItem('balance'))

  return (
    <div className="home-content">
      <LogoIcon className="icon-logo"/>
      <div className="wish-and-button">
        <StarIcon className="star-icon" fill="#EEFB40"/>
        <h2>Wish Wallet</h2>
        <AddButton />
      </div>
      <div className='token-and-balance-container'>
        <ul>
          <p>Token</p>
          {token === 0 || token === null ? <p></p> : token.map((t, index) => (
          <h1 key={index}><img src={EditIcon} alt="icone de editar" data-testid="edit-button" width="20px" color='white' onClick={() => navigate(`/edit-token/${index}`)}/>{t}</h1>))}
        </ul>
        <ul>
          <p>Balance</p>
          {balance === 0 || balance === null ? <p></p> : balance.map((b, index) => (
          <h1 key={index}>{b}</h1>))}
        </ul>
      </div>
    </div>
  )
}
