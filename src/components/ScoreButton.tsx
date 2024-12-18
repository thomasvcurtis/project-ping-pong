import { Button } from '@mui/material'

function plusScore() {
  let score = 0;
  return score + 1;
}


export default function ScoreButton() {
  return <Button
    fullWidth={true}
  >
    Score
  </Button>
}
