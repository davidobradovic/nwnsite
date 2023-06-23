import React from 'react'
import { Link } from 'react-router-dom'
import './navigation.css'

function Navigation() {

    const buttons = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'About',
            path: '/'
        },
        {
            id: 3,
            name: 'Contact US',
            path: '/'
        }
    ]

  return (
    <header className='navigation'>
        <h1 className='title'>BRAND AMBASSADOR</h1>
        
    </header>
  )
}

export default Navigation