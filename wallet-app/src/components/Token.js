import React, { useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import '../styles/TokenStyle.css';


export default function Token() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const [tokenInput, setTokenInput] = useState('')
  const [balanceInput, setBalanceInput] = useState('')
  const token = JSON.parse(localStorage.getItem('token'))
  const balance = JSON.parse(localStorage.getItem('balance'))
  const navigate = useNavigate();

  const handleTokenInput = (e) => {
    setTokenInput(e.target.value)
  }

  const handleBalanceInput = (e) => {
    setBalanceInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (tokenInput === '' || balanceInput === '') {
      alert('Preencha todos os campos')
      return false
    }
    if (pathname === '/add-token' && token.includes(tokenInput)) {
      alert('Token já cadastrado')
      return false
    }
    if (tokenInput.length > 0 && balanceInput.length > 0 && pathname === '/add-token' && !token.includes(tokenInput)) {
      token.push(tokenInput)
      balance.push(balanceInput)
      localStorage.setItem('token', JSON.stringify(token))
      localStorage.setItem('balance', JSON.stringify(balance))
      navigate('/')
    }
    if (pathname !== '/add-token') {
      token[id] = tokenInput
      balance[id] = balanceInput
      localStorage.setItem('token', JSON.stringify(token))
      localStorage.setItem('balance', JSON.stringify(balance))
      navigate('/')
    }
  }

  const buttonRemove = () => {
    token.splice(id, 1)
    balance.splice(id, 1)
    localStorage.setItem('token', JSON.stringify(token))
    localStorage.setItem('balance', JSON.stringify(balance))
    navigate('/')
  }

  return (
    <div className='form-container'>
      <form>
        <label htmlFor='tokenInput'>
          <p>Token</p>
          <input
            type='text'
            id='tokenInput'
            className='token-input'
            onChange={handleTokenInput}
            required
          />
        </label>
        <label htmlFor='balance-input'>
          <p>Balance</p>
          <input
            type='number'
            id='balance-input'
            className='balance-input'
            onChange={handleBalanceInput}
            required
          />
        </label>
        <div className='token-buttons-container'>
          {pathname === '/add-token' ? null : <button onClick={buttonRemove}>Remove</button>}
          <button onClick={handleSubmit}>Save</button>
        </div>
      </form>
    </div>
  )
}
