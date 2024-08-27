import React from 'react'
import { useOutletContext } from 'react-router-dom';

const Home = () => {

  const data = useOutletContext();

  return (
    <div>Home - {data}</div>
  )
}

export default Home