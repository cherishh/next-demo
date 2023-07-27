

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