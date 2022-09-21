import React from 'react'

const Header = ({setshow,show}) => {
  return (
    <div className='header' onClick={()=>setshow(true)}>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Header