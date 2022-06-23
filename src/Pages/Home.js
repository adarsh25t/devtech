import React from 'react'
import PostCard from '../Components/Card/PostCard'
import './Home.css'


function Home() {
  return (
    <div className='Home'>
        <div className="post-list">
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
        </div>
    </div>
  )
}

export default Home