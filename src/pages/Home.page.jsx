import React, { useEffect, useState } from 'react';
import axios from 'axios';

// layout
import DefaultLayoutHOC from '../layouts/Default.Layout';

// components
import HeroCarosuel from '../components/HeroCarosuel/HeroCarosuel.Component';
import PosterSlider from '../components/PosterSlider/PosterSlider.Component';
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.Component';

const Homepage = () => {
  const [RecommendedMovies,setRecommendedMovies] = useState([]);
  const [premierMovies,setpremierMovies] = useState([]);
  const [onlineStreamEvents,setOnlineStreamEvents] = useState([]);

    // get.apiName('/', async ()=>{})
      useEffect(()=>{
        const requestTopRatedMovies = async () => {
          const getTopRatedMovies = await axios.get("/movie/top_rated");
          setRecommendedMovies(getTopRatedMovies.data.results);
        };
        requestTopRatedMovies()
      },[]);

      useEffect(()=>{
        const requestUpComingMovies = async () => {
          const getUpComingMovies = await axios.get("/movie/upcoming");
          setpremierMovies(getUpComingMovies.data.results);
        };
        requestUpComingMovies();
      },[]);

      useEffect(()=>{
        const requestPopularMovies = async () => {
          const getPopularMovies = await axios.get("/movie/popular");
          setOnlineStreamEvents(getPopularMovies.data.results);
        };
        requestPopularMovies();
      },[]);

  return (
    <>
      <HeroCarosuel />

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Top Rated Movies"
          subtitle="List  of Top Rated movies"
          posters={RecommendedMovies}
          isDark={false}
        />
      </div>

      <div className='container mx-auto px-4 md:px-12 my-8'>
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          the best of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>

      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex-col gap-3">
          <div className="hidden md:flex">
            {/* <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS82g8mkrlMMiQ17FGj5_VQAQ-P2gHUyXhYIQ&s"
              alt="Rupay"
              className="w-full h-full"
            /> */}
          </div>
          <PosterSlider
            title="Premiers"
            subtitle="Brand new releases every Friday"
            posters={premierMovies}
            isDark={true}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Popular Movies"
          subtitle="popular movies in ticket booking application"
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
}

export default DefaultLayoutHOC(Homepage);