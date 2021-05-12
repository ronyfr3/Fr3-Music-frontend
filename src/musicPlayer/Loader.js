import React from "react";
import "./Loader.css";

const Loader = ({error}) => {
  return (
    <div>
      <div className="gif">
        <img
          src="https://media.tenor.com/images/9f0fc756b9383e86043bd7dfd6241766/tenor.gif"
          alt="loader gif"
        />
        <p className='errmsg'>{error}</p>
      </div>
    </div>
  );
};

export default Loader;
