import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
        <h1 className='text-5xl font-extrabold'>Our Works</h1>
        {children}
    </div>
  )
}

export default Layout