import React from 'react'
import style from '@styles/header.module.css'
export function Header() {
  return (
    <header className={style?.header}>
    <a><h1>logo</h1></a>
    <ol>
      <li><a href="#">About</a></li>
      <li><a href="#">Experience</a></li>
      <li><a href="#">Work</a></li>
      <li><a href="#">Contact</a></li>
      <li>
        <button>
          Resume
        </button>
      </li>
    </ol>
  </header>
  )
}
