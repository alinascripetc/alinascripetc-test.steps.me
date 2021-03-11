import React, { useState } from 'react'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  commentButton: {
    marginLeft: 10,
  },
  textarea: {
    maxWidth: 400,
    width: '100%'
  }
})

const NewComment = ({ postComment }) => {
  const s = useStyles()
  const [comment, setComment] = useState('')
  return (
    <>
      <TextField
        className={s.textarea}
        multiline
        rows={2}
        value={comment}
        variant="outlined"
        onChange={(text) => setComment(text.target.value)}
      />
      <Button
        className={s.commentButton}
        variant="contained"
        color="primary"
        onClick={() => postComment(comment)}
      >
        Add comment
         </Button>
    </>
  )
}

export default NewComment