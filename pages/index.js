import Default from '../app/layouts/Default/Default'
import HomePage from '../app/templates/HomePage/HomePage'
import Button from '@mui/material/Button';
export default function Home() {
  return (
    <Default>
      <HomePage/>
      <Button variant="contained">Contained</Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons">
        Link
      </Button>
    </Default>
  )
}
