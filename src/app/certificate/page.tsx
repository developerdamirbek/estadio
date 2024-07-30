import { Metadata } from 'next'
import { CertificateDetail } from '@/widgets/Certificate'

export const metadata: Metadata = {
  title: 'EdFix',
  description: 'EdFix',
}

export default function Certificate() {
  return <CertificateDetail />
}
