import { Box, Button, Typography } from '@mui/material'
import NextLink from 'next/link'
import { ROUTES } from '@/constants'
import mainDictionary from '@/dictionary'

export default function NotFoundPage() {
  return (
    <Box>
      <Typography variant="h2" align="center">
        {mainDictionary.error404}
      </Typography>

      <Typography variant="body2" align="center">
        {mainDictionary.thisPageNotExist}
      </Typography>

      <Button component={NextLink} href={ROUTES.home}>
        {mainDictionary.toHomePage}
      </Button>
    </Box>
  )
}
