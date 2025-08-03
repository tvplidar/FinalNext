import './globals.css'
import Header from './components/layout/Header'
import  Drawer from './components/layout/Drawer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body className="bg-gray-50">
        <Header />
        <div className="flex">
          <Drawer />
          <main className="flex-1 ml-64 p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}