import React from 'react'
import classNames from 'classnames/bind'

import styles from './Pagination.module.scss'

const cn = classNames.bind(styles)

type Props = {
  totalSlides: number
  activeIndex: number
}

export const CustomPagination = ({ totalSlides, activeIndex }: Props) => (
  <div className={cn('pagination')}>
    {Array.from({ length: totalSlides }).map((_, index) => (
      <div key={index} className={cn('pagination__dot', { 'pagination__dot--active': index === activeIndex })}>
        <div className={cn('pagination__progress', { 'pagination__progress-width': index === activeIndex })} />
      </div>
    ))}
  </div>
)
