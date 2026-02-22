import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainComponent from './MainComponent';



const Browse = () => {
  // ....fetching the data and putting it in the redux store
       useNowPlayingMovies();
     // ......
  return (
    <div>
      <Header/> 
      <MainComponent/>
    </div>
  )
}

export default Browse;
