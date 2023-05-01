import React from 'react'
import './ProfileEdit.scss'

const ProfileEdit = ({ onEdit }) => {
  return (
    <div>
      Profile Edit
      <button className='back-btn' onClick={onEdit}>Back</button>
    </div>
  )
}

export default ProfileEdit
