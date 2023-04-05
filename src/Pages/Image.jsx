import React, { useState } from 'react'

const Image = ({ImgUrl}) => {
    
    const [hovered, setHovered] = useState(false)

    const onMouseEnterHandler = () => {
        setHovered(true)
    }

    const onMouseLeaveHandler = () => {
        setHovered(false)
    }

    console.log(hovered)

  return (
    <div>
        <div>
            <img src={ImgUrl} onMouseEnter={onMouseEnterHandler}  onMouseLeave={onMouseLeaveHandler}/>
        </div>
    </div>
  )
}

export default Image