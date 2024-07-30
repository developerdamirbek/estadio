import localFont from 'next/font/local'

export const neueMontReal = localFont({
  src: [
    {
      path: '../../public/fonts/NeueMontreal-Bold.woff',
      weight: '500',
    },
    {
      path: '../../public/fonts/NeueMontreal-Bold.woff2',
      weight: '500',
    },
    {
      path: '../../public/fonts/NeueMontreal-Regular.woff',
      weight: '400',
    },
    {
      path: '../../public/fonts/NeueMontreal-Regular.woff2',
      weight: '400',
    },
  ],
})
