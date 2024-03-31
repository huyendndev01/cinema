import React from 'react'
import Header from '../components/header/Header'

const headerOnly = ({children}) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default headerOnly
