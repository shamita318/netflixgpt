import useMovieTrailer from "../hooks/useMovieTrailer";  
import {useSelector} from "react-redux";    


const VedioeBackground = ( {movie_Id}) => {
    
    const trailerVedio = useSelector((state) => state.movies?.trailerVedio);

    // fetch Trailor video and updating the store with trailor video
           useMovieTrailer(movie_Id);

  return (
    <div>
    <iframe className=" w-screen aspect-video"
    src={`https://www.youtube.com/embed/${trailerVedio?.key}?autoplay=1&mute=1`} 
     title="YouTube video player" 
      
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
     referrerPolicy="strict-origin-when-cross-origin" ></iframe>
      
    </div>
  )
}

export default VedioeBackground;
