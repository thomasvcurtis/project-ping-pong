import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import ScoreCard from '@/components/ScoreCard'
import ScoreButton from '@/components/ScoreButton'

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

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'row',
          justifyContent: 'center'

        }}
      >
        <ScoreButton></ScoreButton>
        <ScoreButton></ScoreButton>
      </Box>
    </Container>
  )
}

export default Home
