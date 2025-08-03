'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Book, User, Plus, BookOpen } from 'lucide-react'

const menuItems = [
  { href: '/', label: 'ໜ້າຫລັກ', icon: Home },
  { href: '/books', label: 'ຄັງນິຍາຍ', icon: Book },
  { href: '/books/create', label: 'ຂຽນນິຍາຍ', icon: Plus },
  { href: '/profile', label: 'ໂປຟາຍ', icon: User },
]

export default function Drawer() {
  const pathname = usePathname()

  return (
    <div className="fixed left-0 top-16 h-full w-64 bg-white shadow-lg border-r border-gray-200">
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}