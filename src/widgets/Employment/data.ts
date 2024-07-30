type EmploymentItem = {
  images: {
    id: number
    image: string
  }[]
  details: {
    id: number
    title: string
  }[]
}

export const employmentData: EmploymentItem = {
  images: [
    {
      id: 1,
      image: '/images/employment-img1.webp',
    },
    {
      id: 2,
      image: '/images/employment-img2.webp',
    },
    {
      id: 3,
      image: '/images/employment-img3.webp',
    },
    {
      id: 4,
      image: '/images/employment-img1.webp',
    },
    {
      id: 5,
      image: '/images/employment-img2.webp',
    },
    {
      id: 6,
      image: '/images/employment-img3.webp',
    },
  ],
  details: [
    {
      id: 1,
      title: 'Rezyume va portfelni loyihalashda yordam beramiz',
    },
    {
      id: 2,
      title: 'Suhbatlarga tayyorlaning',
    },
    {
      id: 3,
      title: 'Biz sizni vakansiyalar bilan yopiq kanalga taklif qilamiz',
    },
  ],
}
