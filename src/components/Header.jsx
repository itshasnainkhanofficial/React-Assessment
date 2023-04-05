import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/Fi";
// import { useContext } from "react";
// import { Context } from "../state/Context";

const Header = () => {
//   const {photos, error, isLoading} = useContext(Context);
//   console.log(photos);

  return (
    <div>
      {/* <div className="App">
        <h1>API Posts</h1>
        {isLoading && <div>A moment please...</div>}
        {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        <ul>
          {photos &&
            photos.map(({ id, url }) => (
              <li key={id}>
                <h3>{url}</h3>
              </li>
            ))}
        </ul>
      </div> */}
      <Link to="/">Pic Some</Link>
      <Link to="/cart">
        <FiShoppingCart />
      </Link>
    </div>
  );
};

export default Header;
