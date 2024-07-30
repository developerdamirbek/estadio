import Icon from '@/assets/icons/close-icon.svg'
import { ALERT_TIME_OUT } from '@/constants'
import Alert from '../Alert'
import { alertSuccessDictionary } from '../dictionary'
import { DefaultAlertProps } from '../types'

export const SuccessAlert = ({ onClose, open }: DefaultAlertProps) => (
  <Alert
    autoHideDuration={ALERT_TIME_OUT}
    description={alertSuccessDictionary.description}
    Icon={Icon}
    open={open}
    severity={'success'}
    title={alertSuccessDictionary.title}
    onClose={onClose}
    dataTestId="success_alert"
    isSuccess
  />
)
