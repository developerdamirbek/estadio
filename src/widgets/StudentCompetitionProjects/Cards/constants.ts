import { Navigation } from 'swiper/modules'
import { SwiperProps } from 'swiper/react'

export const siperConfig: SwiperProps = {
  navigation: {
    nextEl: '.studentCompetitionNext',
    prevEl: '.studentCompetitionPrev',
  },
  loop: true,
  slidesPerView: 1,
  spaceBetween: 25,
  modules: [Navigation],
}
