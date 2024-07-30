import { Navigation, Pagination } from 'swiper/modules'
import { SwiperProps } from 'swiper/react'

export const swiperConfig: SwiperProps = {
  navigation: {
    nextEl: '.courseTextFeedbackNext',
    prevEl: '.courseTextFeedbackPrev',
  },
  pagination: {
    clickable: true,
  },
  loop: true,
  breakpoints: {
    1450: {
      slidesPerView: 3.5,
      pagination: false,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      pagination: false,
      spaceBetween: 24,
    },
    550: {
      slidesPerView: 2,
      pagination: false,
      spaceBetween: 18,
    },
    375: {
      slidesPerView: 1.5,
      spaceBetween: 12,
    },
  },
  modules: [Pagination, Navigation],
}
