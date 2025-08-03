import BookList from '../components/books/BookList' 
import { Book } from '@/app/types'
import Link from 'next/link'

async function getBooks(): Promise<Book[]> {
  const res = await fetch('http://localhost:4000/api/books', {
    cache: 'no-store'
  })
  if (!res.ok) throw new Error('Failed to fetch books')
  return res.json()
}

export default async function BooksPage() {
  const books = await getBooks()

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">ຄັງນິຍາຍ</h1>
          <p className="text-gray-600 mt-2">ລວມນິຍາຍທັງຫມົດ</p>
        </div>
        <Link 
          href="/books/create"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          ຂຽນນິຍາຍ
        </Link>
      </div>
      
      <BookList books={books} />
    </div>
  )
}