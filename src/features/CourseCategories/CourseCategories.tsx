import { TabItemType, Tabs } from '@/components'
import { Category } from '@/types'

type Props = {
  categories: Category[]
  onChange: (value: TabItemType['value']) => void
}

export const CourseCategories = ({ categories, onChange }: Props) => (
  <Tabs onChange={onChange} tabs={categories.map(({ name, id }) => ({ label: name, value: id }))} />
)
