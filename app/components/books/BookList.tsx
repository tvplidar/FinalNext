import BookCard from './BookCard'
import { Book } from '@/app/types'

interface BookListProps {
  books: Book[]
}

export default function BookList({ books }: BookListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  )
}
