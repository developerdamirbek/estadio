import { Box } from '@mui/material'
import mainDictionary from '@/dictionary'
import { PortfolioCarousel } from '../PortfolioProjects/PortfolioCarousel'
import { courseAdvantagesData } from './data'

export const CourseAdvantages = () => (
  // TODO PortfolioCarousel будет изменено после выпуска отдельного компонента.
  <Box>
    <PortfolioCarousel data={courseAdvantagesData} title={mainDictionary.courseAdvantagesTitle} />
  </Box>
)

CourseAdvantages.displayName = 'CourseAdvantages'
