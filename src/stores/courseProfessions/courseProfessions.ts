import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { Category, CourseType } from '@/types/coursesType'

type CourseProfessionsStore = {
  isExpandedCategoriesAccordion: boolean
  expandedCategory: number
  categories: Category[]
  courses: CourseType[]
  categoryId: number
  isAccordionModal: boolean
  professionName: string
  courseName: string
  setProfessionName: (name: string) => void
  setExpandedCategoriesAccordion: (isExpandedCategoriesAccordion: boolean) => void
  setExpandedCategory: (expandedCategory: number) => void
  setCategoryId: (categoryId: number) => void
  setCourseName: (courseName: string) => void
  setCategories: (categories: Category[]) => void
  setCourses: (courses: CourseType[]) => void
  setAccordionModal: (isAccordionModal: boolean) => void
}

export const useCourseProfessionsStore = create<CourseProfessionsStore>()(
  devtools(
    persist(
      (set) => ({
        categories: [],
        courses: [],
        isExpandedCategoriesAccordion: false,
        isAccordionModal: false,
        expandedCategory: 0,
        professionName: '',
        categoryId: 0,
        courseName: '',
        setProfessionName: (professionName: string) => set({ professionName }),
        setExpandedCategoriesAccordion: (isExpandedCategoriesAccordion: boolean) =>
          set({ isExpandedCategoriesAccordion }),
        setAccordionModal: (isAccordionModal: boolean) => set({ isAccordionModal }),
        setExpandedCategory: (expandedCategory: number) => set({ expandedCategory }),
        setCategoryId: (categoryId: number) => set({ categoryId }),
        setCourseName: (courseName: string) => set({ courseName }),
        setCategories: (categories: Category[]) => set({ categories }),
        setCourses: (courses: CourseType[]) => set({ courses }),
      }),
      {
        name: 'courseProfessionsStore',
      },
    ),
  ),
)

export const useCourseProfessionsStates = () =>
  useCourseProfessionsStore((state) => ({
    categories: state.categories,
    isExpandedCategoriesAccordion: state.isExpandedCategoriesAccordion,
    isAccordionModal: state.isAccordionModal,
    professionName: state.professionName,
    expandedCategory: state.expandedCategory,
    categoryId: state.categoryId,
    courseName: state.courseName,
    courses: state.courses,
  }))

export const useCourseProfessionsActions = () =>
  useCourseProfessionsStore((state) => ({
    setCategories: state.setCategories,
    setExpandedCategoriesAccordion: state.setExpandedCategoriesAccordion,
    setAccordionModal: state.setAccordionModal,
    setProfessionName: state.setProfessionName,
    setExpandedCategory: state.setExpandedCategory,
    setCategoryId: state.setCategoryId,
    setCourseName: state.setCourseName,
    setCourses: state.setCourses,
  }))
