import React, { Children } from 'react'

const Button = ({children,...props}) => {
  return (
    <button className="btn btn-light" {...props}>
               {children}
            </button>
  )
}

export default Button