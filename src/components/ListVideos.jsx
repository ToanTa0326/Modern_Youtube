import { Box, Stack } from "@mui/material"
import {VideoCard, ChannelCard} from './'

const ListVideos = ({videos, direction}) => {
    return (
        <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' gap={2} sx={{overFlowY: 'auto'}}>
            {videos.map((item,idx) => (
                <Box key={idx}>
                    {item.id.videoId && <VideoCard video={item} /> }
                    {item.id.channelId && <ChannelCard channelDetail={item} /> }
                </Box>
            ))}
        </Stack>
    )
}

export default ListVideos