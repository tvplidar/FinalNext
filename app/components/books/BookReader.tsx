'use client'
import { Book } from '@/app/types'
import { ArrowLeft, Bookmark, Share2 } from 'lucide-react'
import Link from 'next/link'

interface BookReaderProps {
  book: Book
}

export default function BookReader({ book }: BookReaderProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <Link 
            href="/books"
            className="flex items-center space-x-2 text-blue-600 hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>ກັບໄປຄັງນິຍາຍ</span>
          </Link>
          
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <Bookmark className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <Share2 className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{book.title}</h1>
        <div className="flex items-center space-x-4 text-gray-600">
          <span>ໂດຍ: {book.author}</span>
          <span>•</span>
          <span>ປະເພດ: {book.name_type}</span>
          <span>•</span>
          <span>{new Date(book.create_at).toLocaleDateString('th-TH')}</span>
        </div>
        <p className="text-gray-700 mt-4">{book.description}</p>
      </div>
      
      <div className="p-6">
        <div className="prose prose-lg max-w-none">
          <div className="whitespace-pre-wrap">{book.content}</div>
        </div>
      </div>
    </div>
  )
}