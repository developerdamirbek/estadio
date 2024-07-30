import { colors } from '@/styles/mui/colors'

export const muiSliderStyles = {
  '& .MuiSlider-thumb': {
    color: colors.sliderColor,
  },
  '& .MuiSlider-track': {
    color: colors.sliderColor,
  },

  '& .MuiSlider-rail': {
    color: '#acc4e4',
  },
  '& .MuiSlider-active': {
    color: 'green',
  },

  '& .MuiSlider-mark, & .MuiSlider-markActive': {
    width: '9px',
    height: '9px',
    borderRadius: '50%',
    color: colors.black,
    backgroundColor: colors.black,
  },
}
