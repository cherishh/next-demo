import Link from "next/link"
import { headers } from 'next/headers'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'USER DEMO',
  description: '这是一个user 页面demo，用来测试next meta',
}


export default function User() {
  const headersList = headers()
  const referer = headersList.get('user-agent')

  const users = [
    { name: 'user1', id: 1 },
    { name: 'user2', id: 2 },
    { name: 'user3', id: 3 },
    { name: 'user4', id: 4 },
    { name: 'user5', id: 5 },
  ]
  return (
    <div>
      <h1>user index</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <Link href={`/user/${user.id}`}>{user.name}</Link>
            </li>
          )
        })}
      </ul>
      <div>{referer}</div>
    </div>
  )
}

export const runtime = 'edge';
