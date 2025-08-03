import BookList from './components/books/BookList'
import { Book } from './types'

async function getBooks(): Promise<Book[]> {
  const res = await fetch('http://localhost:4000/api/books', {
    cache: 'no-store'
  })
  if (!res.ok) throw new Error('Failed to fetch books')
  return res.json()
}

export default async function HomePage() {
  const books = await getBooks()

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">ໜ້າຫລັກ</h1>
        <p className="text-gray-600 mt-2">ຄົ້ນຫາແລະອ່ານນິຍາຍທີ່ເຈົ້າມັກ</p>
      </div>
      
      <BookList books={books} />
    </div>
  )
}