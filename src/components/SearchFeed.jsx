import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { Videos } from '../components'
import { fetchFromAPI } from '../utils/fetchFromApi'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {

  const [videos, setVideos] = useState([]);
  const { searchTern } = useParams() ;

  useEffect(() => {
    const data = fetchFromAPI(`search?part=snippet&q=${searchTern}`)
      .then((data) => {setVideos(data.items)})
  }, [searchTern])

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{
          color: "#fff"
        }}>
            Seach Results for: <span style={{ color: '#f31503'}}>{searchTern}</span> videos
        </Typography>

        <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed