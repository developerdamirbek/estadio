import { Box, IconButton, Snackbar, Typography } from '@mui/material'
import MuiAlert from '@mui/material/Alert'
import classNames from 'classnames/bind'
import { AlertProps } from './types'

import styles from './Alert.module.scss'

const cn = classNames.bind(styles)

export default function Alert({
  autoHideDuration,
  description,
  Icon,
  isSuccess,
  onClose,
  open,
  severity,
  title,
  dataTestId,
}: AlertProps) {
  return (
    <Snackbar
      open={open}
      onClose={onClose}
      autoHideDuration={autoHideDuration}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <MuiAlert
        className={cn('alert', { 'alert--success': isSuccess })}
        variant="filled"
        onClose={onClose}
        severity={severity}
        icon={false}
        action={
          <IconButton size="small" aria-label="close" color="success" onClick={onClose}>
            <Icon />
          </IconButton>
        }
      >
        <Box className={cn('alert__inner')} data-testid={dataTestId}>
          <Icon />
          <Box className={cn('alert__content')}>
            <Typography variant={'body2'} className={cn('alert__content-title')}>
              {title}
            </Typography>
            <Typography className={cn('alert__content-description')}>{description}</Typography>
          </Box>
        </Box>
      </MuiAlert>
    </Snackbar>
  )
}
