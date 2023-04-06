import React, { useState } from 'react'
import {RiAddCircleLine} from 'react-icons/ri'
import {RiHeartLine} from 'react-icons/ri'
import styles from './styles/image.module.css'

const Image = ({ImgUrl}) => {
    
    const [hovered, setHovered] = useState(false)

    const onMouseEnterHandler = () => {
        setHovered(true)
    }

    const onMouseLeaveHandler = () => {
        setHovered(false)
    }

    // console.log(hovered)

  return (

        <div className={styles.container}>
            {hovered ?  <RiHeartLine className='favorite'/> : <RiAddCircleLine className='cart'/>}
            
            
            <img src={ImgUrl} onMouseEnter={onMouseEnterHandler}  onMouseLeave={onMouseLeaveHandler}/>
        </div>

  )
}

export default Image