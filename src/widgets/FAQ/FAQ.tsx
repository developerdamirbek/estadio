import { getAverageSalaries, getFaqs } from '@/api'
import { FAQ as FAQModule } from '@/modules/FAQ'

export const FAQ = async () => {
  let faqs = null

  try {
    const faqsResponse = await getFaqs()

    if (!faqsResponse?.data?.faqs.length) {
      return null
    }
    faqs = faqsResponse.data.faqs
  } catch (error) {
    console.error(error)

    return null
  }

  return <FAQModule faqs={faqs} />
}

FAQ.displayName = 'FAQ'
