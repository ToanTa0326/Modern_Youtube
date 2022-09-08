import { CheckCircle } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom"
import { fetchFromAPI } from '../utils/fetchFormAPI'
import { ListVideos } from './'

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then(data => setVideoDetail(data.items[0]))
    fetchFromAPI(`search?part=snippet&realtedToVideoId=${id}&type=video`)
      .then(data => setVideos(data.items))
  }, [id])
  

  if(!videoDetail?.snippet) return (<Typography color='white' variant="h1">Loading...</Typography>)

  const {snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount}} = videoDetail

  return (
    <Box minHeight='90vh'>
      <Stack direction={{xs: 'column', md: 'row'}}>
        <Box flex={1}>
          <Box sx={{width: '100%', position: 'sticky', top: '78px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls />
            <Typography color='#fff' variant='h5' fontWeight='bold' p={2} >{title}</Typography>
            <Stack direction='row' justifyContent='space-between' sx={{color: 'white'}} py={1} px={2}>
              <Link to={`channel/${channelId}`}>
                <Typography variant={{sm: 'subtitle1', md: 'h6'}} color='white'>
                  {channelTitle}
                  <CheckCircle sx={{color: 'gray', fontSize: '12px', ml: '5px'}} />
                </Typography>
              </Link>
              <Stack direction='row' gap='20px' alignItems='center'>
                <Typography variant="body1" sx={{opacity: '0.7'}}>{parseInt(likeCount).toLocaleString()} Likes</Typography>
                <Typography variant="body1" sx={{opacity: '0.7'}}>{parseInt(viewCount).toLocaleString()} Views</Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{md: 1, xs: 5}} justifyContent='center' alignItems='center'>
          <ListVideos videos={videos} direction='column' />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail