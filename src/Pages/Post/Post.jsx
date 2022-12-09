import React,{ useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { uploadimage } from '../../actions/post'
import './Post.css'

const Post = () => {
  const [ imageTitle, setImageTitle ] = useState('')
  const [ imageBody, setImageBody ] = useState('')
  const [ imageTags, setImageTags ] = useState('')
   
  const dispatch = useDispatch()
  const User = useSelector((state) => (state.currentUserReducer))
  const navigate = useNavigate()

  const handleSubmit = (e) => {
      e.preventDefault()
    console.log({ imageTitle, imageBody, imageTags})
      dispatch(uploadimage({ imageTitle, imageBody, imageTags}, navigate))
  }

  const handleEnter = (e) => {
      if(e.key === 'Enter'){
          setImageBody(imageBody + "\n")
      }
  }
  return (
      <div className="ask-question">
          <div className="ask-ques-container">
              <h1>A public Post</h1>
              <form onSubmit={handleSubmit}>
                  <div className="ask-form-container">
                      <label htmlFor="ask-ques-title">
                          <h4>Title</h4>
                          <p>Be specific and imagine you’re asking a question to another person</p>
                          <input type="text" id='ask-ques-title' onChange={(e) => {setImageTitle(e.target.value)}} placeholder='e.g. Is there an R function for finding the index of an element in a vector?'/>
                      </label>
                      <label htmlFor="ask-ques-body">
                          <h4>Image</h4>
                          <p>Import the image you want to upload</p>
                          <input type="file" id="image-input" accept="image/jpeg, image/png, image/jpg" onChange={(e) => {setImageBody(e.target.value)}} onKeyPress={handleEnter}/><div id="display-image"></div>
                      </label>
                      <label htmlFor="ask-ques-tags">
                          <h4>Tags</h4>
                          <p>Add up to 5 tags to describe what your image is about</p>
                          <input type="text" id='ask-ques-tags' onChange={(e) => {setImageTags(e.target.value.split(" "))}}  placeholder='e.g. (xml typescript wordpress)'/>
                      </label>
                  </div>
                  <input type="submit" value='Post Image' className='review-btn'/>
              </form>
          </div>
      </div>
  )
}
export default Post
