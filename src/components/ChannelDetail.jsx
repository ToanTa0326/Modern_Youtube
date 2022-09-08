import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchFromAPI } from '../utils/fetchFormAPI'
import { ChannelCard, ListVideos } from './'

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then(data => setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then(data => setVideos(data?.items))
  }, [id])
  

  return (
    <Box minHeight='calc(100vh - 78px)'>
      <div style={{
        background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
        zIndex: 10,
        height: '300px'
      }} />
      <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
      <Box display='flex' p='2'>
        <Box sx={{ mr: { sm: '100px' }}} />
        <ListVideos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail