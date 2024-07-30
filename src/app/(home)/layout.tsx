import { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import { getMetaData } from '@/helpers/next'
import { Layout } from '@/layouts'
export const metadata: Metadata = getMetaData('Edfix')

export default async function LoginLayout({ children }: PropsWithChildren) {
  return <Layout>{children}</Layout>
}
