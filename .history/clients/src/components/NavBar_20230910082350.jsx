import React from 'react'
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import {CiLight}  from 'react-icons/ci'
import {MdDarkMode} from 'react-icons/md'

const NavBar = () => {
  return (
    <div>
       <button>
        <HiOutlineMenuAlt1/>
       </button>
       <h1> Dashboard </h1>
       <div>
         <button>
           <CiLight/>
           <MdDarkMode/>

         </button>

       </div>
      
    </div>
  )
}

export default NavBar

