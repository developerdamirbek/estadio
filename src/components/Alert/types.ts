import { FunctionComponent, SVGProps } from 'react'
import { AlertColor } from '@mui/material'

export type AlertProps = {
  title: string
  description: string
  onClose: () => void
  open: boolean
  autoHideDuration?: number
  severity: AlertColor
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>
  isSuccess: boolean
  dataTestId: string
}

export type DefaultAlertProps = Pick<AlertProps, 'onClose' | 'open'>
