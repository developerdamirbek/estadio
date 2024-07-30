import { create } from 'zustand'
import { StudentsProjectsState } from '@/types'

export const useStudentsProjectsStore = create<StudentsProjectsState>((set) => ({
  showAll: false,
  toggleShowAll: () => set((state) => ({ showAll: !state.showAll })),
}))
