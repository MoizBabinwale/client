import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const posts = ({post}) => {
    return (
        <div className='display-post-container'>
            <div className='display-votes-ans'>
                <p>{post.upVote.length - post.downVote.length}
                votes</p>
            {/* </div>
            <div className='display-votes-ans'> */}
                <p>{post.noOfAnswers}answers</p>
            </div>
            <div className="display-post-details">
                <Link to={`/posts/${post._id}`} className='post-title-link'>{post.postTitle}</Link>
                <div className='display-tags-time'>
                    <div className='display-tags'>
                        {
                            post.postTags.map((tag) => (
                                <p key={tag}>{tag}</p>
                            ))
                        }
                    </div>
                    <p className='display-time'>
                        asked {moment(post.askedOn).fromNow()} { post.userPosted }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default posts
