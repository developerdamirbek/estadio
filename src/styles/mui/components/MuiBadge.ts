import { Components } from '@mui/material/styles/components'

export const MuiBadge: Components['MuiBadge'] = {
  styleOverrides: {
    root: () => ({
      '&.circle': {},
    }),

    colorError: {
      color: 'var(--white)',
    },
  },
}
