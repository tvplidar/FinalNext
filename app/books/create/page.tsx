import BookForm from '@/app/components/books/BookForm'

export default function CreateBookPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">ຂຽນນິຍາຍໃຫມ່</h1>
      <BookForm />
    </div>
  )
}