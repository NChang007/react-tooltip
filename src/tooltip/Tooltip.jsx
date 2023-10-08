import React from 'react'
import "./tooltip.css"

const Tooltip = ({children, placement, tip}) => {
  return (
    <div className='tooltip' title={tip} data-placement={placement}>
        {children}
    </div>
  )
}

export default Tooltip