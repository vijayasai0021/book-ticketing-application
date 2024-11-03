import React, { useState, useContext } from "react";
import { MovieContext } from "../context/Movie.context";
import PaymentModal from "../PaymentModal/Payment.Component";


const MovieInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);

  const { movie } = useContext(MovieContext);

  const genres = movie.genres?.map(({ name }) => name).join(", ");

  const rentMovie = () => {
    setIsOpen(true);
    setPrice(149);
  };

  const buyMovie = () => {
    setIsOpen(true);
    setPrice(999);
  };

  return (
    <>
      <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price} />;
      <div className="flex flex-col gap-8">
        <h1 className="text-white text-5xl font-bold">
          {movie.original_title}
        </h1>
        <div className="text-white flex flex-col gap-2">
          <h4>{movie.vote_average}/10,votes: {movie.vote_count}</h4>
          <h4>Origial Language:  {movie.original_language}</h4>
          <h4>
            {movie.runtime} min | {genres}
          </h4>
        </div>
        <div className="flex items-center gap-3 md:px-4 md:w-screen text-xl px-4">
          <button onClick={rentMovie} className="bg-red-500 w-56 py-3 text-white font-semibold rounded-lg">
            Rent 
          </button>
          <button onClick={buyMovie} className="bg-red-500 w-56 py-3 text-white font-semibold rounded-lg">
            Buy 
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;