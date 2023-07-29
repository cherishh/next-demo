import Link from "next/link"


export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <nav>
        <Link href='/product/text'>text</Link>
        <Link href='/img'>img</Link>
      </nav>
      <section>{children}</section>
    </div>
  )
}

export const runtime = 'edge';