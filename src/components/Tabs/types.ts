export type Tab = {
  label: string
  value: number
}

export type Props = {
  isScrollable?: boolean
  tabs: Tab[]
  onChange?: (value: Tab['value']) => void
}
