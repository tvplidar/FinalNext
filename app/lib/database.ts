import mysql from 'mysql2'

export const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'arnsathc'
})

connection.connect((error) => {
  if (error) {
    console.error('Database connection failed:', error)
    return
  }
  console.log('Connected to MySQL database')
})
