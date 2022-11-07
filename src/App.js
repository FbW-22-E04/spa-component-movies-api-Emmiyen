import React ,{useState} from "react";
import "./App.css";
import Search from "./Components/Search";
import MovieCard from "./Components/MovieCard";
 


function App() {
  const [search , setSearch] = useState('');  
  const [moviesList ,setMoviesList ] = useState([]);
  const [error,setError] = useState(null)

  const handleChange = (text)=>{
    setSearch(text);
  }
  const searchMovies = async()=>{
    setMoviesList([]);
    const response = await fetch(`https://www.omdbapi.com/?apikey=your-api-key&s=${search}`)
    const data = await response.json();
    console.log(data);
    if(data.Response === "True"){
      setError(null);
      setMoviesList(data.Search);
    }
    else {
      setMoviesList([]);
      setError(data.Error);
    }
   
  }
  return (
    <div className="App">
      <h1> React search movies</h1>
      <Search handleChange={handleChange} searchMovies={searchMovies} />
      {moviesList.map((item,index)=>{
         return  <MovieCard key={index} title={item.Title} id={item.imdbID} />
      })}
      {error !== null &&  <h4>{error}</h4> }
      
    </div>
  );
}

export default App;
