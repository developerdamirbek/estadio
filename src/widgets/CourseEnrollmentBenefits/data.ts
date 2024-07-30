import CourseEnrollmentBenefits from '/public/images/course-enroll-benefits.png'
import EnvelopeIcon from '@/assets/icons/envelope.svg'
import EducationIcon from '@/assets/icons/graduate-cap.svg'
import PortfolioIcon from '@/assets/icons/pin-icon.svg'
import BagIcon from '@/assets/icons/small-bag.svg'
import VerifyIcon from '@/assets/icons/verify.svg'

export const courseBenefitsData = {
  image: CourseEnrollmentBenefits,
  author: 'Daniyer Farxodov',
  title: 'Kasb nomi',
  details: [
    {
      id: 1,
      title: 'Ishga kirishga yordam beramiz*',
      icon: BagIcon,
    },
    {
      id: 2,
      title: 'Bepul bonus kurslar',
      icon: EducationIcon,
    },
    {
      id: 3,
      title: "Doimiy qo'llab quvvatlovchi ustozlar",
      icon: EnvelopeIcon,
    },
    {
      id: 4,
      title: 'Portfolio uchun loyihalar',
      icon: PortfolioIcon,
    },
    {
      id: 5,
      title: "Istalgan vaqt va istalgan joyda ta'lim",
      icon: VerifyIcon,
    },
  ],
}
