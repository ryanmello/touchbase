import React from 'react'
import './ProfileCard.scss'

const ProfileCard = ({ currentUser }) => {
  return (
    <div className='profile-card-container'>
      {currentUser.name}
    </div>
  )
}

export default ProfileCard
