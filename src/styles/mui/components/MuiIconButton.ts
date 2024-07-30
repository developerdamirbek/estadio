import { Components } from '@mui/material/styles/components'

const iconButtonSize: Record<'small' | 'medium' | 'large', number> = {
  small: 26,
  medium: 38,
  large: 60,
}

export const MuiIconButton: Components['MuiIconButton'] = {
  styleOverrides: {
    root: ({ ownerState }) => ({
      padding: 0,
      ...(ownerState.color ? { color: ownerState.color } : {}),
      ...(ownerState.size ? { height: iconButtonSize[ownerState.size], width: iconButtonSize[ownerState.size] } : {}),
    }),
  },
}
