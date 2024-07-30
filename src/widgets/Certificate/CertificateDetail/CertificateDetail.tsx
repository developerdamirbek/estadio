import React from 'react'
import { Box } from '@mui/material'
import classNames from 'classnames/bind'
import Image from 'next/image'
import { WidgetHeader } from '@/components'
import { ROUTES } from '@/constants'
import mainDictionary from '@/dictionary'
import { DownloadCertificate } from './DownloadCertificate'

import styles from './CertificateDetail.module.scss'

const cn = classNames.bind(styles)

export const CertificateDetail = () => (
  <Box className={cn('certificate-detail')}>
    <Box className={cn('certificate-detail__header')}>
      <WidgetHeader
        goBackTitle={mainDictionary.goBack}
        goBackHref={ROUTES.courses}
        title={mainDictionary.certificate}
        actions={<DownloadCertificate />}
      />
    </Box>
    <Box className={cn('certificate-detail__content')}>
      <Image
        className={cn('certificate-detail__content-img')}
        width={1260}
        height={500}
        src="/images/certificate-img.webp"
        alt="certificate"
      />
    </Box>
  </Box>
)
