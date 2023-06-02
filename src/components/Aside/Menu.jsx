import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <>
    <section>
      <nav>
        <ul className='flex flex-col h-screen'>
          <li>
            <Link to="/">Réglages</Link>
          </li>
          <li>
          <Link to="/">Réglages</Link>

          </li>
          <li>
          <Link to="/">Réglages</Link>
          </li>
        </ul>
      </nav>
    </section>
    </>
  )
}
