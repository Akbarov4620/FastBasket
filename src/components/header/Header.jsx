import React from 'react'
import './Header.scss'
import shop from '../../assets/shop.svg'
import user from '../../assets/user.svg'
import basket from '../../assets/basket.svg'

export default function Header() {
  return (
    <>
      <header>
        <div className="container">
          <div className="header">
            <h1>
              <a style={{display: 'flex', alignItems: 'center', gap: '10px'}} href="/">
                <img src={basket} alt='header logo' width={50} height={50}/>
                <span style={{color: 'black'}}>FastBasket</span>
              </a>
            </h1>
            <div className="header__others-box">
              <a href='/cart'>
                <img src={shop} width={28} height={28} alt="shop svg" />
              </a>
              <a href='/profile'>
                <img src={user} width={30} height={30} alt="user svg" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}