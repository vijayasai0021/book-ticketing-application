import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import MovieLayoutHoc from "../layouts/Movie.layout";
import axios from "axios";
import { MovieContext } from "../components/context/Movie.context";
import Slider from "react-slick";
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";
import MovieHero from "../components/MovieHero/MovieHero.Component";

const MoviePage = () => {
  const { id } = useParams();

  const { movie, setMovie } = useContext(MovieContext);

  const [cast, setCast] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [recommendationMovies, setRecommendationMovies] = useState([]);

  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    };
    requestCast();
  }, [id]);

  useEffect(() => {
    const requestNowPlayingMovies = async () => {
      const getNowPlayingMovies = await axios.get(`/movie/now_playing`);
      setNowPlayingMovies(getNowPlayingMovies.data.results);
    };
    requestNowPlayingMovies();
  }, [id]);

  useEffect(() => {
    const requestRecommedationMovies = async () => {
      const getRecommendationMovies = await axios.get(
        `/movie/${id}/recommendations`
      );
      setRecommendationMovies(getRecommendationMovies.data.results);
    };
    requestRecommedationMovies();
  }, [id]);

  useEffect(() => {
    const requestMovie = async () => {
      const getMovieDate = await axios.get(`/movie/${id}`);
      setMovie(getMovieDate.data);
    };
    requestMovie();
  }, [id]);

  const settingsCast = {};

  const settings = {};

  return (
    <>
    <MovieHero/>
      <div className="my-12 container px-4 lg-ml-20 lg:w-2/1">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-gray-800 font-bold gap-3 text-2xl">
            About the movie
          </h1>
          <p>{movie.overview}</p>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable Offers
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row ">
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">
                  Visa Stream Offer
                </h3>
                <p className="text-gray-600">
                  Get 75% off up to INR 200 on all RuPay Card* on BookMyShow
                  Stream
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcApplePay className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">Film Pass</h3>
                <p className="text-gray-600">
                  Get 75% off up to INR 200 on all RuPay Card* on BookMyShow
                  Stream
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          <hr />
        </div>

        {/* recommendations */}
        <div className="my-8">
          <PosterSlider
            config={settings}
            title="Recommended Movies"
            posters={recommendationMovies}
            isDark={false}
          />
        </div>

        <div className="my-8">
          <hr />
        </div>

          {/* now playing movies */}

        <PosterSlider
          config={settings}
          title="BTAPP XCLUSIVE Movies"
          posters={nowPlayingMovies}
          isDark={false}
        />
      </div>
    </>
  );
};

export default MovieLayoutHoc(MoviePage);