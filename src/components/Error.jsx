import React from 'react'

const Error = ({err}) => {
  return (
    <div>{err.message}</div>
  )
}

export default Error