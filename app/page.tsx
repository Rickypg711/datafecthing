import { Main } from 'next/document'
import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
   <main>
<h1>Home Page</h1>
<p><Link href='/users'>users</Link></p>

   </main>
  )
}
