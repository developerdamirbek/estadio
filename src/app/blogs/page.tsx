import { Metadata } from 'next'
import { Blogs } from '@/modules/Blogs'

export const metadata: Metadata = {
  title: 'EdFix',
  description: 'EdFix',
}

export default function BlogsPage() {
  return <Blogs />
}
