import { Search } from '@mui/icons-material'
import { IconButton, Paper } from '@mui/material'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const searchInput = useRef();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(searchInput.current.value){
            navigate(`/search/${searchInput.current.value}`)
            searchInput.current.value = ''
        }
    }

    return (
        <Paper
            component='form'
            onSubmit={handleSubmit}
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: 2,
                boxShadow: 'none',
                mr: { sm:5 }
            }}
        >
            <input
                className='search-bar'
                placeholder='Search...'
                ref={searchInput}
                onChange={() => {}}
            />
            <IconButton
                type='submit'
                sx={{p:'10px', color: 'red'}}
            >
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar