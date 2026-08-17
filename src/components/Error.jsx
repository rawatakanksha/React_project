import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
  const err=useRouteError();
  console.log(err)
  return (
   <>
  <h1>OOPS!!</h1>
  <div>{err.status}: {err.statusText}</div>
   </>
  )
}

export default Error
