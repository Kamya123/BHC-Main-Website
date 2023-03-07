import React from 'react'

const Cards = ({className, children}) => {
  return (
    <article className={`cards ${className}`}>
        {children}
    </article>
  )
}

export default Cards
