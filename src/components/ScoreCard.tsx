import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'

interface ScoreCardProps
{
  score: number;
}

export default function ScoreCard({ score }: ScoreCardProps = { score: 0 }) {
  return (
    <Box
      sx={{
        width: '20%',
        height: '0%',
        padding: '20%',
        m: 2,
        border: '1px solid black'
      }}
    >
      <Paper
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'

        }}
      >
        <h1>{score}</h1>
      </Paper>
    </Box>
  )
}
