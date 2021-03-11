import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  commentBox: {
    padding: '10px 5px',
    color: '#3F51B5'
  },
  commentContent: {
    color: '#757575'
  },
  commentItem: {
    display: 'block',
  }
})

const Comment = ({ body, email, name, index }) => {
  const s = useStyles()
  return (
    <div className={s.commentBox}>
      <div>{index}.</div>
      <div className={s.commentItem}>
        user comment:{" "}
        <span className={s.commentContent}>
          {body}
        </span>
      </div>
      <div className={s.commentItem}>
        user email:{" "}
        <span className={s.commentContent}>
          {email}
        </span>
      </div>
      <div className={s.commentItem}>
        user name:{" "}
        <span className={s.commentContent}>
          {name}
        </span>
      </div>
    </div>
  )
}

export default Comment