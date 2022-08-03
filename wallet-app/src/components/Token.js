import React from 'react'
import '../styles/TokenStyle.css'

export default function Token() {
  return (
    <div className='form-container'>
      <form>
        <label htmlFor='tokenInput'>
          <p>Token</p>
          <input
            type='text'
            id='tokenInput'
            className='token-input'
          />
        </label>
        <label htmlFor='balance-input'>
          <p>Balance</p>
          <input
            type='number'
            id='balance-input'
            className='balance-input'
          />
        </label>
      </form>
    </div>
  )
}
