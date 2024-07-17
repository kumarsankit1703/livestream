import React, { Children } from 'react'
import { Link, Outlet } from 'react-router-dom'

function Nav() {
  return (
    <>
    <div className='border-2 m-4 p-4 rounded-lg flex'>
        <h1 className='text-2xl font-semibold mr-4'>Home</h1>
        
        <ul className='flex items-center'>
            <li className='mr-4 underline '>
                <Link to = '/'  >Home</Link>
            </li>
            <li className='underline'>
                <Link to = '/createuser' >Create</Link>
            </li>
        </ul>
    </div>
    <Outlet /> 
    </>
  )
}

export default Nav
