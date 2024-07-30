import { Box, Card, CardContent, CardMedia, Chip } from '@mui/material'
import classNames from 'classnames/bind'
import { studentsProjects } from '../constans'

import style from './Cards.module.scss'

const cn = classNames.bind(style)

type Props = {
  showAll: boolean
}

export const Cards = ({ showAll }: Props) => {
  const projectsToShow = showAll ? studentsProjects : studentsProjects.slice(0, 4)

  return (
    <Box className={cn('cards')}>
      {projectsToShow.map(({ image, autor }) => (
        <Card key={autor} className={cn('cards__item')}>
          <CardMedia component="img" src={image} alt="cards__item-image" />
          <CardContent className={cn('cards__item-content')}>
            <Chip label={autor} className={cn('cards__item-content-autor')} />
          </CardContent>
        </Card>
      ))}
    </Box>
  )
}
