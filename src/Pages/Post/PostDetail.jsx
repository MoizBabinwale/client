import React from "react"
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux"
import './PostDetail.css'
import PostList from './PostList'
const PostDetail = () => {
    const location = useLocation()

const user = 1;
const navigate = useNavigate()
    const postsList = useSelector(state => state.postsReducer)
    const checkAuth = () => {
        if (user === null) {
        alert("login or signup to ask a question")
        navigate('/Auth')
        } else {
        navigate('/Post')
        }
    }
    return (
        <div className='main-bar'>
        <button className="post-btn" onClick={checkAuth}>Post</button>
        <h1>Loading...</h1>
        </div>

    )
}

export default PostDetail