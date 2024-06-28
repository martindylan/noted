export type ItemType = {
  content: string,
  type: string,
  id: number,
  checked: boolean
}

export type NoteType = {
  title: string,
  focus: number,
  id: number,
  isDragging: boolean,
  items: Array<ItemType>
}

export type GlobalType = {
  currentNote: number
  dropDown: boolean
  themeSelect: string,
  theme: string
  notes: Array<NoteType>
}