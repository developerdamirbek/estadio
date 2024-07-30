import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import { Box, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import Link from 'next/link'
import { WidgetHeaderProps } from './types'

import styles from './WidgetHeader.module.scss'

const cn = classNames.bind(styles)

export const WidgetHeader = ({ title, actions, goBackTitle, goBackHref }: WidgetHeaderProps) => (
  <Box className={cn('widget-header')}>
    <Box className={cn('widget-header__content')}>
      {goBackTitle && goBackHref && (
        <Link className={cn('widget-header__content-go-back')} href={goBackHref}>
          <ArrowBackRoundedIcon className={cn('widget-header__content-go-back-icon')} />

          <Typography variant="h6">{goBackTitle}</Typography>
        </Link>
      )}

      <Typography variant="h3" className={cn('widget-header__content-title')}>
        {title}
      </Typography>
    </Box>

    {actions && <Box className={cn('widget-header__action')}>{actions}</Box>}
  </Box>
)
