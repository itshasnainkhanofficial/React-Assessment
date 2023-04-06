import React, { useContext, useState } from 'react'
import {RiAddCircleLine, RiHeartFill, RiHeartLine} from 'react-icons/ri'
import styles from './styles/image.module.css'
import { Context } from '../state/Context'
import PropTypes from 'prop-types'

const Image = ({ className, ImgData}) => {
    
    const [hovered, setHovered] = useState(false)

    const { toggleFavorite } = useContext(Context);

    const onMouseEnterHandler = () => {
        if(!ImgData.isFavorite){

            setHovered(true)
        }
    }

    const onMouseLeaveHandler = () => {
        setHovered(false)
    }

    // console.log(hovered)

  return (

        <div className={styles.container}>
            {hovered ?  <RiHeartLine className='favorite' /> : (ImgData.isFavorite ? <RiHeartFill className='favorite' onClick={ () => toggleFavorite(ImgData.id)}/> : <RiAddCircleLine className='cart' onClick={ () => toggleFavorite(ImgData.id)}/> )}
         
            <img src={ImgData.url} onMouseEnter={onMouseEnterHandler}  onMouseLeave={onMouseLeaveHandler}/>
        </div>

  )
}

Image.propTypes = {
    className: PropTypes.string,

    ImgData: PropTypes.shape({
        id: PropTypes.string,
        url: PropTypes.string,
        isFavorite: PropTypes.bool
      }),
}

export default Image