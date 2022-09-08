import { Box, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchFromAPI } from "../utils/fetchFormAPI"
import { ListVideos } from './'

const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then(data => setVideos(data.items))
  }, [searchTerm])

  return (
    <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
      <Typography variant="h4" fontWeight='bold' mb={2} sx={{color: 'white'}}>
        Search result for:&#160;<span style={{color: '#F31503'}}>{searchTerm}</span>&#160;videos
      </Typography>
      <ListVideos videos={videos} />
    </Box>
  )
}

export default SearchFeed