export interface Task {
  title: string
  createdAt: Date
  id: string
}

export interface Column {
  title: string
  id: string
  tasks: Task[]
}
