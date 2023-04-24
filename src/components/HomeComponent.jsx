import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomeComponent = () => {
    const redirect = useNavigate();

  return (
    <div className='home-wrapper'>
      <div className='home-btns'>
        <button onClick={() => redirect("/login")}>Sign In</button>
        <button onClick={() => redirect("/register")}>Register</button>
      </div>
    </div>
  )
}

export default HomeComponent
