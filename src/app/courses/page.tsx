import { Metadata } from 'next'
import { Courses } from '@/widgets/Courses'

export const metadata: Metadata = {
  title: 'EdFix',
  description: 'EdFix',
}

export default function CoursesPage() {
  return <Courses />
}
