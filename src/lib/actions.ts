'use server'

import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'

export async function revalidateCourses() {
  revalidateTag('courses')
  redirect('/courses')
}
