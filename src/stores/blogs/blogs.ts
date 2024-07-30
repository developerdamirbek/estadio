import { create } from 'zustand'
import { BlogsState } from '@/types'

export const useBlogsStore = create<BlogsState>((set) => ({
  showAll: false,
  toggleShowAll: () => set((state) => ({ showAll: !state.showAll })),
}))
