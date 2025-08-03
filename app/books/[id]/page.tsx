import BookReader from '@/app/components/books/BookReader' 
import { Book } from '@/app/types'

async function getBook(id: string): Promise<Book> {
  const res = await fetch(`http://localhost:4000/api/books/${id}`, {  
    cache: 'no-store'
  })
  if (!res.ok) throw new Error('Failed to fetch book')
  return res.json()
}

export default async function BookPage({ params }: { params: { id: string } }) {
  const book = await getBook(params.id)

  return (
    <div className="max-w-4xl mx-auto">
      <BookReader book={book} />
    </div>
  )
}
