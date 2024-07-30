import { Navigation } from 'swiper/modules'
import { SwiperProps } from 'swiper/react'

export const swiperConfig: SwiperProps = {
  navigation: {
    nextEl: '.openToAllLearnersNext',
    prevEl: '.openToAllLearnersPrev',
  },
  loop: true,
  breakpoints: {
    800: {
      spaceBetween: 30,
      slidesPerView: 1.5,
    },
    700: {
      spaceBetween: 20,
      slidesPerView: 1.3,
    },
    375: {
      spaceBetween: 10,
      slidesPerView: 1.2,
    },
  },
  modules: [Navigation],
}
