import { Book } from '../types'

async function getUserBooks(): Promise<Book[]> {
  const res = await fetch('http://localhost:3000/api/books?user=current', {
    cache: 'no-store'
  })
  if (!res.ok) throw new Error('Failed to fetch user books')
  return res.json()
}

export default async function ProfilePage() {
  const userBooks = await getUserBooks()

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">ໂປຟາຍ</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">ສະຖິຕິ</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>ກຳລັງອ່ານ:</span>
            </div>
            <div className="flex justify-between">
              <span>ອ່ານຈົບແລ້ວ:</span>
            </div>
            <div className="flex justify-between">
              <span>ຂຽນແລ້ວ:</span>
              <span className="font-semibold">{userBooks.length} ຫນ້າ</span>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">ນຶຍາຍຂອງຂ້ອຍ</h2>
          <div className="space-y-4">
            {userBooks.map((book) => (
              <div key={book.id} className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold">{book.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{book.description}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-gray-500">
                    {new Date(book.create_at).toLocaleDateString('th-TH')}
                  </span>
                  <div className="space-x-2">
                    <button className="text-blue-600 hover:underline text-sm">ແກ້ໄຂ</button>
                    <button className="text-red-600 hover:underline text-sm">ລົບ</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}