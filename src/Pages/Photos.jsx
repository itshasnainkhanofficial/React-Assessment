import { useContext } from "react";
import { Context } from "../state/Context";
import Image from "./Image";
const Photos = () => {
  const {photos, error, isLoading} = useContext(Context);

  return (
    <div className="App">
        <h1>Photos</h1>
        {isLoading && <div>Loading...</div>}
        {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        <ul>
          {photos &&
            photos.map(({ id, url }) => (
              <li key={id}>
                <Image ImgUrl={url}/>
              </li>
            ))}
        </ul>
      </div>
  )
}

export default Photos