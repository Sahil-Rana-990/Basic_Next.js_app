import React from 'react'
import Link from 'next/link'
export default function Header() {
  return (
    <div className="main">
      <Link href="/" className='innerLinks'>
        <h1>View Images</h1>
      </Link>
      
      <Link href="/postimage" className='innerLinks'>
        <h1>Post Images</h1>
      </Link>
    </div>
  )
}
