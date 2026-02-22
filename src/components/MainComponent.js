import { useSelector } from 'react-redux';
import VedioeTitle from './VedioeTitle';
import VedioeBackground from './VedioeBackground';

const MainComponent = () => {
    
    const movies = useSelector((state) => state.movies?.nowPlayingMovies);
    if (!movies) return null;
    const mainMovie = movies[0]
    console.log(mainMovie);

    const { original_title, overview , id } = mainMovie;
  return (
    <div>
    <VedioeTitle title={original_title} overview={overview}/>
    <VedioeBackground movie_Id={id}/>
      
    </div>
  )
}

export default MainComponent
