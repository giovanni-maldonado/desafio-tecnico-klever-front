import React, { useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import '../styles/TokenStyle.css';


export default function Token() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const [tokenInput, setTokenInput] = useState('')
  const [balanceInput, setBalanceInput] = useState('')
  const [isVisible, setIsVisible] = useState(false)
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
    if (tokenInput === '' || balanceInput.length === 0) {
      setIsVisible(true)
      return false
    }
    if (pathname === '/add-token' && token.includes(tokenInput)) {
      alert('Token já existe')
      setIsVisible(true)
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
      {isVisible ? <p className='error-message' data-testid='error-message'>Preencha todos os campos</p> : null}
      <form>
        <label htmlFor='tokenInput'>
          <p>Token</p>
          <input
            type='text'
            id='tokenInput'
            data-testid='token-input'
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
            data-testid='balance-input'
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
