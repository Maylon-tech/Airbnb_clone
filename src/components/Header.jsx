import { Box, Container } from '@mui/material'
import Logo from './Logo'

import { flexBetweenCenter, dFlex } from 'themes/commonThemes.js'

const Header = () => {
  return (
    <Box
        sx={{
            ...dFlex,
            minHeight: 70,
            borderBottom: '1px solid #ddd',
        }}
    >
        <Container maxWidth="xl">
            <Box sx={{
                ...flexBetweenCenter,
                minHeight: 70,
                px: 4,
            }}>
                <Logo />
            </Box>
        </Container>
    </Box>
  )
}

export default Header