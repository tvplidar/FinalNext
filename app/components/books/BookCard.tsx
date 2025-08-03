'use client'
import Link from 'next/link'
import { Book } from '@/app/types'
import { Calendar, User, Tag } from 'lucide-react'

interface BookCardProps {
  book: Book
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{book.title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">{book.description}</p>
        
        <div className="space-y-2 text-xs text-gray-500">
          <div className="flex items-center space-x-1">
            <User className="h-4 w-4" />
            <span>{book.author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Tag className="h-4 w-4" />
            <span>{book.name_type}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{new Date(book.create_at).toLocaleDateString('th-TH')}</span>
          </div>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <Link 
            href={`/books/${book.id}`}
            className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
          >
            ອ່ານເລີຍ
          </Link>
          <select className="text-xs border rounded px-2 py-1">
            <option>ເພີ່ມເຂົ້າຊັ້ນ</option>
            <option>ກຳລັງອ່ານ</option>
            <option>ອ່ານຈົບແລ້ວ</option>
          </select>
        </div>
      </div>
    </div>
  )
}