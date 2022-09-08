import { Typography, Box, Stack } from '@mui/material'
import { useEffect, useState } from 'react'
import { fetchFromAPI } from '../utils/fetchFormAPI'
import {Sidebar, ListVideos} from './index'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then(data => setVideos(data.items))
  }, [selectedCategory])

  return (
    <Stack sx={{flexDirection: { sx: 'column', md: 'row' }}}>
      <Box sx={{height: {sx: 'auto', md: 'calc(100vh - 78px)'}, borderRight: '1px solid #3d3d3d', px: {sx: 0, md: 2}}}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </Box>
      <Box p={2} sx={{overflowY: 'auto', height: {sx: 'auto', md: 'calc(100vh - 78px)'}, flex: 2}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color: 'white'}}>
          {selectedCategory}&#160;
          <span style={{color: '#F31503'}}>videos</span>
        </Typography>
        <ListVideos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed