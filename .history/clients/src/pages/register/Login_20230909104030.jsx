import React from 'react'
import Logo from '../../components/Logo'
import RowForm from '../../components/RowForm'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='form'>
      <h1>
        <Logo/>
      </h1>
      <h2>Login</h2>
      <form>
        <RowForm label='email' type='email' />
        <RowForm label='password' type='password' />
        <button className='btn btn-signIn'>signIn</button>
         Not a member yet?<Link to='/register' ><button className=''>Rgister</button></Link>
      </form>
      </div>
  )
}

export default Login