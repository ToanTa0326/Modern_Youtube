import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import {logo} from '../utils/constants'
import SearchBar from './SearchBar'

const Navbar = () => (
    <Stack 
      p={2}
      direction='row'
      alignItems='center'
      sx={{background: '#000', justifyContent: 'space-between', position: 'sticky', top: 0}}
      zIndex={100}
    >
      <Link
        to='/'
        style={{display:'flex', alignItem: 'center'}}
      >
        <img src={logo} alt='logo' height={45} />
      </Link>
      <SearchBar />
    </Stack>
)

export default Navbar