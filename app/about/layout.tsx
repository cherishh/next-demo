import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ABOUT DEMO',
  description: '这是一个ABOUT 页面demo，用来测试next meta',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h2>About</h2>
      <section>{children}</section>
    </div>
  )
}