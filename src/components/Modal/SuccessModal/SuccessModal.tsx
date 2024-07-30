import { PropsWithChildren } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { Box, Button, IconButton, Modal as MuiModal, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import Image from 'next/image'
import mainDictionary from '@/dictionary'

import styles from './SuccessModal.module.scss'

const cn = classNames.bind(styles)

type ModalProps = PropsWithChildren & {
  phoneNumber: string
  isModalOpen: boolean
  onClose: () => void
}

export const SuccessModal = ({ phoneNumber, isModalOpen, onClose }: ModalProps) => (
  <MuiModal
    className={cn('modal')}
    open={isModalOpen}
    onClose={onClose}
    aria-labelledby="modal-title"
    aria-describedby="modal-description"
  >
    <Box className={cn('modal__wrapper')}>
      <Box className={cn('modal__content')}>
        <IconButton className={cn('modal__close')} size="small" aria-label="close" color="primary" onClick={onClose}>
          <CloseIcon />
        </IconButton>
        <Box className={cn('modal__content-body')}>
          <Box className={cn('modal__content-image')}>
            <Image src="/images/paper-airplane.png" alt="Success" width={132} height={78} />
          </Box>
          <Box className={cn('modal__content-info')}>
            <Typography className={cn('modal__content-info-title')}>{mainDictionary.requestHasBeenSent}</Typography>
            <Typography
              className={cn('modal__content-info-description')}
              dangerouslySetInnerHTML={{ __html: mainDictionary.contactYou(phoneNumber) }}
            />
          </Box>
        </Box>
        <Button variant="contained" onClick={onClose} className={cn('modal__content-button')}>
          Tushunarli
        </Button>
      </Box>
    </Box>
  </MuiModal>
)
