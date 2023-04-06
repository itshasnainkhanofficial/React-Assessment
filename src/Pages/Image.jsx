import React, { useContext, useState } from 'react'
import {RiAddCircleLine} from 'react-icons/ri'
import {RiHeartLine} from 'react-icons/ri'
import styles from './styles/image.module.css'
import { Context } from '../state/Context'

const Image = ({ImgUrl, ImgId}) => {
    
    const [hovered, setHovered] = useState(false)

    const { toggleFavorite } = useContext(Context);

    const onMouseEnterHandler = () => {
        setHovered(true)
    }

    const onMouseLeaveHandler = () => {
        setHovered(false)
    }

    // console.log(hovered)

  return (

        <div className={styles.container}>
            {hovered ?  <RiAddCircleLine className='cart' /> : <RiHeartLine className='favorite' onClick={ () => toggleFavorite(ImgId)}/>}
            
            
            <img src={ImgUrl} onMouseEnter={onMouseEnterHandler}  onMouseLeave={onMouseLeaveHandler}/>
        </div>

  )
}

export default Image