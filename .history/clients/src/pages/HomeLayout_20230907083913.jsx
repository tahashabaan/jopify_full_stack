import React from 'react'
import styled from 'styled-components';


import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  const styledNav = styled.nav`
    
  `

  return (
    <>
    <nav>navbar</nav>
    <Outlet/>
    </>
  )
}

export default HomeLayout