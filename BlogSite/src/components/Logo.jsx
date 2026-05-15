import React from 'react'
// import logoImg from '../assets/devChautari.logo.png'
import logoImg from '../assets/logo.png'

function Logo({width = '100px'}) {
  return (
<div className='flex items-center justify-center p-2 pl-0 '>
  <img 
    src={logoImg} 
    alt="Dev Chautari Logo" 
    className='h-20 w-auto object-contain md:h-16' // Controls the height responsively
  />
</div>
  )
}

export default Logo