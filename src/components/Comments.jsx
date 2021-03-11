import React from 'react'
import Comment from './Comment'

const Comments = ({ comments }) => {
  return (
    <>
      {
        comments.map((comment, index) => {
          return (
            <Comment
              key={comment.id}
              body={comment.body}
              email={comment.email}
              name={comment.name}
              index={index + 1}
            />
          )
        })
      }
    </>
  )
}

export default Comments