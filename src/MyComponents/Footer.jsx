import React from 'react'

const footer = () => {
  const footerStyle = {
    position: 'absolute',
    top: '89vh',
    width: '100%'
  }
  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}>
      <p className='text-center '>CopyRight &copy; MyTodosList.com</p>
    </footer>
  )
}

export default footer