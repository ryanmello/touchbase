import React from 'react'
import './PostCard.scss'

const PostCard = ({ post }) => {
  return (
    <div className='post-card-container'>
        <div className='post-card'>
            <p className='post-card-status'>{post.status}</p>
        </div>
    </div>
  )
}

export default PostCard
