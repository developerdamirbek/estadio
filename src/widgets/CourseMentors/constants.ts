import { Navigation, Pagination } from 'swiper/modules'
import { SwiperProps } from 'swiper/react'

export const mentorSwiperConfig: SwiperProps = {
  navigation: {
    nextEl: '.courseMentorNext',
    prevEl: '.courseMentorPrev',
  },
  loop: true,

  breakpoints: {
    1200: {
      slidesPerView: 1,
      spaceBetween: 25,
      pagination: false,
    },
  },
  modules: [Navigation, Pagination],
}
