import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type AppStore = {
  isSidebarMini: boolean

  toggleSidebar: (newStatus?: boolean) => void
}

export const useAppStore = create<AppStore>()(
  devtools(
    persist(
      (set) => ({
        isSidebarMini: false,

        toggleSidebar: (newStatus) => set((state) => ({ isSidebarMini: newStatus || !state.isSidebarMini })),
      }),
      {
        name: 'appStore',
      },
    ),
  ),
)

export const useAppStoreStates = () =>
  useAppStore((state) => ({
    isSidebarMini: state.isSidebarMini,
  }))

export const useAppStoreActions = () =>
  useAppStore((state) => ({
    toggleSidebar: state.toggleSidebar,
  }))
