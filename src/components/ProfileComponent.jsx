import React from 'react'
import "../sass/ProfileComponent.scss";
import ProfileCard from './common/ProfileCard/ProfileCard';

const ProfileComponent = ({ currentUser }) => {
  return (
    <div className='profile-container'>
        <ProfileCard currentUser={currentUser}/>
    </div>
  )
}

export default ProfileComponent
