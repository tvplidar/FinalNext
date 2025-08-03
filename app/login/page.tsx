// 'use client'

// import { useState } from 'react'
// import { Input, Button, Form, message } from 'antd'
// import { useRouter } from 'next/navigation'

// export default function LoginPage() {
//   const [loading, setLoading] = useState(false)
//   const router = useRouter()

//   const onFinish = async (values: any) => {
//     setLoading(true)
//     try {
//       const res = await fetch('http://localhost:3001/api/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(values)
//       })
//       const data = await res.json()
//       if (data.success) {
//         message.success('ເຂົ້າສູ່ລະບົບ')
//         router.push('/books') 
//       } else {
//         message.error(data.message)
//       }
//     } catch (err) {
//       message.error('   ')
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div style={{ maxWidth: 400, margin: 'auto', padding: '50px 20px' }}>
//       <h2>เข้าสู่ระบบ</h2>
//       <Form onFinish={onFinish} layout="vertical">
//         <Form.Item name="user_name" label="ชื่อผู้ใช้" rules={[{ required: true }]}>
//           <Input />
//         </Form.Item>
//         <Form.Item name="password" label="รหัสผ่าน" rules={[{ required: true }]}>
//           <Input.Password />
//         </Form.Item>
//         <Form.Item>
//           <Button type="primary" htmlType="submit" loading={loading} block>
//             เข้าสู่ระบบ
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   )
// }
