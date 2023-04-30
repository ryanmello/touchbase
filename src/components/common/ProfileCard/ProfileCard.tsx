import React from 'react'
import './ProfileCard.scss'
import ProfileEdit from '../ProfileEdit/ProfileEdit'
import { useNavigate } from 'react-router-dom'

const ProfileCard = ({ currentUser }) => {
    const redirect = useNavigate();
  return (
    <div className='profile-card-container'>
        <div className='edit-btn-container'>
            <button className='edit-btn' onClick={() => redirect("/profile/edit")}>Edit</button>
        </div>
        <h3 className='username'>{currentUser.name}</h3>
        <p className='email'>{currentUser.email}</p>
    </div>
  )
}

export default ProfileCard
