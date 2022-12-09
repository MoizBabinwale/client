import React from 'react'
import './DisplayPost.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import PostDetail from './PostDetail'

const DisplayPost = () => {
  return (
    <div className='home-container-1'>
            <LeftSidebar />
            <div className='home-container-2'>
                <PostDetail />
                <RightSidebar />
            </div>
        </div>
  )
}

export default DisplayPost