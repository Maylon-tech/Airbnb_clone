import { Box, Typography } from '@mui/material'
import { pink } from '@mui/material/colors'

import { FaAirbnb } from 'react-icons/fa'
import { flexCenter } from 'themes/commonThemes'

const Logo = () => {
  return (
    <Box sx={flexCenter}>
        <FaAirbnb size={40} color={pink[500]} />
        <Typography 
        sx={{ 
            ml: 1, 
            color: theme => theme.palette.secondary.main,
            fontSize: '20px',
            fontWeight: 'bold',
        }}
        component="3"
        >
            airBnB
        </Typography>
    </Box>
  )
}

export default Logo