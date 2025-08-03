'use client'
import { useState } from 'react'
import { Search, User, Menu } from 'lucide-react'

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-md hover:bg-gray-100 lg:hidden">
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="text-2xl font-bold text-blue-600">ອ່ານສະເຖາະ</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="ຄົ້ນຫານິຍາຍ..."
                className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            
            <button className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100">
              <User className="h-5 w-5" />
              <span className="hidden sm:block">ຜຸ້ໃຊ້</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}