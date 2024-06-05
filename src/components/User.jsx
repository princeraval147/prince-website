import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    const {userId} = useParams()

  return (
    <>
      <h1 className='text-center my-8 font-semibold text-3xl'>User : {userId}</h1>
    </>
  )
}

export default User
