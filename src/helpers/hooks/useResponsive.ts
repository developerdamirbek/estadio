'use client'

import { Breakpoint } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

export const enum Query {
  UP = 'up',
  DOWN = 'down',
  BETWEEN = 'between',
  ONLY = 'only',
}

type Key = Breakpoint | number
type Start = Breakpoint | number
type End = Breakpoint | number

export const useResponsive = (query: Query, key?: Key, start?: Start, end?: End) => {
  const theme = useTheme()

  const mediaUp = useMediaQuery(theme.breakpoints.up(key as Key))

  const mediaDown = useMediaQuery(theme.breakpoints.down(key as Key))

  const mediaBetween = useMediaQuery(theme.breakpoints.between(start as Start, end as End))

  const mediaOnly = useMediaQuery(theme.breakpoints.only(key as Breakpoint))

  const queriesMap = {
    [Query.UP]: mediaUp,
    [Query.DOWN]: mediaDown,
    [Query.BETWEEN]: mediaBetween,
    [Query.ONLY]: mediaOnly,
  }

  return queriesMap[query]
}
