import { useContext } from "react";
import { Context } from "../state/Context";
import Image from "./Image";

import styles from './styles/photos.module.css'
const Photos = () => {
  const {allPhotos, error, isLoading} = useContext(Context);

  return (
    <div className={styles.mainContainer}>
        <h1 className={styles.heading}>All Photos</h1>
        {isLoading && <div>Loading...</div>}
        {error && (
          <div className={styles.errorstyle}>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        <ul className={styles.container}>
          {allPhotos &&
            allPhotos.map(({ id, url }) => (
              <li key={id} >
                <Image ImgUrl={url} ImgId={id}/>
              </li>
            ))}
        </ul>
      </div>
  )
}

export default Photos