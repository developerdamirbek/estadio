import { Components } from '@mui/material/styles/components'

export const MuiSvgIcon: Components['MuiSvgIcon'] = {
  styleOverrides: {
    root: {
      color: 'var(--text)',

      '&:hover': {
        color: 'var(--brand)',
      },
    },
  },
}
