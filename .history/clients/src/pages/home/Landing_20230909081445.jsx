import React from 'react'

import Wrapper from './LandingPageStyled';
import Logo from '../../components/Logo'



const Landing = () => {

  return (
    <Wrapper>
      <nav>
        <Logo/>
      </nav>
      <div className='page'>
      <section className='left__page'></section>
        <h1 className='h1-head'>Job <span>Tracking</span> App</h1>
        <p >
          I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue bottle single-origin coffee chia. Aesthetic post-ironic venmo, quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch narwhal.
        </p>
        <section className='registre-line'>
          <button className='btn btn-login'>Login</button>
          <button className='btn btn-register'>Register</button>
        </section>
      </div>
      
    </Wrapper>
  )
}

export default Landing