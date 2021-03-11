import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress';


const Preloader = ({ preloader }) => {
  return preloader && <LinearProgress />
}

export default Preloader