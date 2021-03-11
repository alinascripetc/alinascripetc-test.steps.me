import React, { useEffect, useState } from 'react'
import Comments from './components/Comments'
import NewComment from './components/NewComment'
import Preloader from './components/Preloader'
import { API } from './API/API'

import InfiniteScroll from 'react-infinite-scroller'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
  main__container: {
    padding: 25,
  },
  input__container: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: 25,
  },
  preloader__container: {
    margin: '10px 0',
    width: '100%'
  }
})

function App() {
  const s = useStyles()
  const portionSize = 20
  const [comments, setComments] = useState([])
  const [page, setPage] = useState(1)
  const [preloader, setPreloader] = useState(false)

  const postComment = async (comment) => {
    const response = await API.postComment(comment);
    const newComment = response.data;
    setComments([...comments, ...newComment])
  }


  const addMoreComment = async () => {
    setPreloader(true)
    const response = await API.getComments(page, portionSize)
    setComments([...comments, ...response.data])
    setPreloader(false)
    setPage(page + 1)
  }

  useEffect(() => {
    addMoreComment()
  }, [])

  return (
    <>
      <CssBaseline />
      <Container
        className={s.main__container}
        maxWidth="sm"
      >
        <Box className={s.input__container}>
          <NewComment postComment={postComment} />
        </Box>
        <InfiniteScroll
          pageStart={0}
          loadMore={addMoreComment}
          hasMore={true || false}
        >
          <Comments comments={comments} />
        </InfiniteScroll>
        <Box className={s.preloader__container}>
          <Preloader preloader={preloader} />
        </Box>
      </Container>
    </>
  )
}

export default App