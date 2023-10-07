import React from 'react'

const Tooltip = ({children, placement}) => {
  return (
    <div className='tooltip' data-placement={placement}>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptate eligendi</span>
    </div>
  )
}

export default Tooltip