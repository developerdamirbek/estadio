import { ThemeOptions } from '@mui/material'

export const typography: ThemeOptions['typography'] = {
  fontSize: 14,
  htmlFontSize: 14,

  h1: {
    fontWeight: 500,
    fontSize: 'clamp(1.5rem, 1.91vw + 0.583rem, 2.875rem)',
  },

  h2: {
    fontWeight: 500,
    fontSize: 'clamp(1.563rem, 0.98vw + 1.324rem, 2.5rem)',
  },

  h3: {
    fontFamily: "'PP Neue Montreal', sans-serif",
    fontWeight: 500,
    fontSize: '40px',
    lineHeight: '54px',
    marginBottom: '15px',

    '@media (width <= 768px)': {
      fontSize: '27px',
      lineHeight: '33px',
    },
  },

  h4: {
    fontWeight: 600,
    fontSize: 'clamp(1.125rem, 0.392vw + 1.029rem, 1.5rem)',
  },

  h5: {
    fontWeight: 500,
    fontSize: 'clamp(1.125rem, 0.392vw + 1.029rem, 1.5rem)',
  },

  h6: {
    fontWeight: 500,
    fontSize: 'clamp(0.875rem, 0.261vw + 0.811rem, 1.125rem)',
  },

  subtitle1: {
    fontSize: '16px',
    color: '#828282',
  },

  button: {
    fontWeight: 400,
    fontSize: 'clamp(14px, 1vw, 16px)',
    textTransform: 'none',
  },

  subtitle2: {
    fontWeight: 400,
    fontSize: '14px',
  },
  body1: {
    fontSize: 'clamp(0.875rem, 0.131vw + 0.843rem, 1rem)',
  },

  body2: {
    fontSize: '12px',
    color: 'var(--text)',
  },

  caption: {
    fontSize: '16px',
    color: 'var(--brand)',
    fontWeight: 400,
  },
}
