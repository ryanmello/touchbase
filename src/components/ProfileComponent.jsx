import React from 'react'
import ProfileCard from './common/ProfileCard/ProfileCard';
import { useState } from 'react';
import ProfileEdit from './common/ProfileEdit/ProfileEdit';

const ProfileComponent = ({ currentUser }) => {
  const [isEdit, setIsEdit] = useState(false);

  const onEdit = () => {
    setIsEdit(!isEdit);
  }
  return (
    <div className='profile-container'>
        {isEdit ? <ProfileEdit onEdit={onEdit}/> : <ProfileCard currentUser={currentUser} onEdit={onEdit}/>}
    </div>
  )
}

export default ProfileComponent
