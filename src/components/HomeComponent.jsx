import React from 'react'
import { useNavigate } from 'react-router-dom'
import PostStatus from './common/PostStatus/PostStatus';
import '../sass/HomeComponent.scss'

const HomeComponent = ({ currentUser }) => {
  return (
    <div className='home-component'>
      <PostStatus currentUser={currentUser}/>
    </div>
  )
}

export default HomeComponent
