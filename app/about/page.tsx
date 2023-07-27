'use client'
import { useState, useEffect } from 'react'
import { useSelectedLayoutSegment, usePathname } from 'next/navigation'
import './styles.scss'

export default function Home() {
  const [count, setCount] = useState(0);
  const segment = useSelectedLayoutSegment()
  const pathname = usePathname()

  useEffect(() => {
    console.log('mounted')
  }, [])

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div className='about'>
      <span>{count}</span>
      <span onClick={() => {handleClick()}}>+</span>
      <div>
        segment: {segment}
      </div>
      <div>
        pathname: {pathname}
      </div>
    </div>
  )
}
