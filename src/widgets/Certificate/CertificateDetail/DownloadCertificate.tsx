'use client'

import React from 'react'
import { Button } from '@mui/material'
import DownloadIcon from '@/assets/icons/download.svg'
import mainDictionary from '@/dictionary'

export const DownloadCertificate = () => {
  const handleDownload = () => {
    const link = document.createElement('a')

    link.href = '/images/certificate.png'
    link.download = 'certificate.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Button startIcon={<DownloadIcon />} color="primary" variant="contained" onClick={handleDownload}>
      {mainDictionary.download}
    </Button>
  )
}
