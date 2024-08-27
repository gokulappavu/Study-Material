import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Login = () => {

  const data = useOutletContext();
  return (
    <div>Login- {data}</div>
  )
}

export default Login