export interface Book {
  id: number
  title: string
  author: string
  name_type: string
  description: string
  content: string
  create_at: string
}

export interface User {
  user_id: number
  user_name: string
  password: string
}

export interface ReadingStatus {
  id: number
  user_id: number
  book_id: number
  status: 'reading' | 'completed' | 'in_shelf'
  created_at: string
  updated_at: string
}