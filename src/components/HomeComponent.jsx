import React from 'react'
import { useNavigate } from 'react-router-dom'
import PostStatus from './common/PostStatus/PostStatus';
import '../sass/HomeComponent.scss'

const HomeComponent = () => {
  return (
    <div className='home-component'>
      <PostStatus/>
    </div>
  )
}

export default HomeComponent
