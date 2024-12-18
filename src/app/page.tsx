import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import ScoreCard from '@/components/ScoreCard'

const Home: NextPage = () => {
  return (
    <Container maxWidth='lg'>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'row',
          justifyContent: 'center'

        }}
      >
        <ScoreCard score={0}></ScoreCard>
        <ScoreCard score={11}></ScoreCard>
      </Box>
    </Container>
  )
}

export default Home
