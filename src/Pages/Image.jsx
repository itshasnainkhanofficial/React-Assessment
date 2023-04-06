import React, { useContext, useState } from 'react'
import {RiAddCircleLine, RiHeartFill, RiHeartLine} from 'react-icons/ri'
import styles from './styles/image.module.css'
import { Context } from '../state/Context'

const Image = ({ImgUrl, ImgId, isFavorite}) => {
    
    const [hovered, setHovered] = useState(false)

    const { toggleFavorite } = useContext(Context);

    const onMouseEnterHandler = () => {
        if(!isFavorite){

            setHovered(true)
        }
    }

    const onMouseLeaveHandler = () => {
        setHovered(false)
    }

    // console.log(hovered)

  return (

        <div className={styles.container}>
            {hovered ?  <RiHeartLine className='favorite' /> : (isFavorite ? <RiHeartFill className='favorite' onClick={ () => toggleFavorite(ImgId)}/> : <RiAddCircleLine className='cart' onClick={ () => toggleFavorite(ImgId)}/> )}
         
            <img src={ImgUrl} onMouseEnter={onMouseEnterHandler}  onMouseLeave={onMouseLeaveHandler}/>
        </div>

  )
}

export default Image