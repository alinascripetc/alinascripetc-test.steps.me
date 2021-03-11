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
  const [state, setState] = useState([])
  const [commentsLimit, setCommentsLimit] = useState(20)
  const [preloader, setPreloader] = useState(false)
  const portionSize = 20

  const postComment = async (comment) => {
    const response = await API.postComment(comment)
    if (response.status === 200) {
      getData()
    }
  }

  const getData = async () => {
    setPreloader(true)
    const response = await API.getComments(commentsLimit)
    setState(response)
    setPreloader(false)
    setCommentsLimit(commentsLimit + portionSize)
  }

  const addMoreComment = async () => {
    setPreloader(true)
    const response = await API.getComments(commentsLimit)
    setState(response)
    setPreloader(false)
    setCommentsLimit(commentsLimit + portionSize)
  }

  useEffect(async () => {
    getData()
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
          <Comments comments={state} />
        </InfiniteScroll>
        <Box className={s.preloader__container}>
          <Preloader preloader={preloader} />
        </Box>
      </Container>
    </>
  )
}

export default App