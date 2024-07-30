import { Components } from '@mui/material/styles/components'

export const MuiAccordion: Components['MuiAccordion'] = {
  styleOverrides: {
    root: {
      ':before': {
        display: 'none',
      },
      ':last-of-type': {
        borderBottomLeftRadius: '20px',
        borderBottomRightRadius: '20px',
      },
      ':first-of-type': {
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
      },
      boxShadow: 'none',
      '.MuiAccordionSummary-expandIconWrapper': {
        color: 'var(--brand)',
      },
    },
  },
}
