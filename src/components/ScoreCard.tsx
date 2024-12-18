import Paper from '@mui/material/Paper'

interface ScoreCardProps
{
  score: number;
}

export default function ScoreCard({ score }: ScoreCardProps = { score: 0 }) {
  return (
    <Paper
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100vh',
        height: '33vh',
        m: 3
      }}
    >
      <h1>{score}</h1>
    </Paper>
  )
}
