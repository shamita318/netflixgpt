
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTrailerVedio } from '../utils/moviesSlice';

const useMovieTrailer = (movie_Id) => {

  const dispatch = useDispatch();
   
    // fetch Trailor video and updating the store with trailor video
    const getMovievideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_Id}/videos?language=en-US`, API_OPTIONS );
        const json = await data.json();
        
        console.log(json);

        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        console.log(trailer);
        dispatch(addTrailerVedio(trailer));  
    };
    useEffect(() => {
        getMovievideos();
    }, [])
}

export default useMovieTrailer;
