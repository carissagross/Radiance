
import React from "react";
import Footer from "../Footer/Footer";
import './Favorites.css'

const Favorites = ({ favs }) => {
  const favorite = favs.map((affirm) => {
    return (
      <div className="mini-container" key={affirm.id}>
        <div className="mini-card">
          <p className="mini-description"> {affirm.description}</p>
          <img className="mini-pic" src={affirm.image} />
        </div>
      </div>
    );
  });

  return (
    <div className="mini-fav-container">
      {!favorite.length && <h2 className="fav-error">You have no favorites yet!</h2>}
      {favorite}
      <Footer />
    </div>
  );
};


export default Favorites;






