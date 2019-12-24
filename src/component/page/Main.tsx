import React from 'react'

import { useThunk } from 'lib/hook'

import * as router from 'store/router'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme: Theme) => {
  // console.log(theme)
  return createStyles({
    default: {
      boxShadow: 'inset 0 0 0 1px gray'
    }
  })
})

const Main: React.FC = () => {
  const routerThunk: router.Thunk = useThunk(router.thunk)

  const styles = useStyles()

  const onClick = () => routerThunk.push('/other')

  return (
    <Container className={styles.default}>
      <Button onClick={onClick} variant="contained">
        Button
      </Button>
      <Box bgcolor="primary.main" m={1} height="10em">
        Some Box
      </Box>
      <Box bgcolor="primary.main" m={1} height="10em">
        Some Box
      </Box>
      <Box bgcolor="primary.main" m={1} height="10em">
        Some Box
      </Box>
      <Box bgcolor="primary.main" m={1} height="10em">
        Some Box
      </Box>
      <Box bgcolor="primary.main" m={1} height="10em">
        Some Box
      </Box>
      <Box bgcolor="primary.main" m={1} height="10em">
        Some Box
      </Box>
      <Box bgcolor="primary.main" m={1} height="10em">
        Some Box
      </Box>
      <Box bgcolor="primary.main" m={1} height="10em">
        Some Box
      </Box>
      <Box bgcolor="primary.main" m={1} height="10em">
        Some Box
      </Box>
    </Container>
  )
}

export default Main
