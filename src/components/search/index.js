import React, {useState} from "react"

import SearchList from "./SearchList"
import "./style.css"

const fetchURL = async (URL)=>{
     let res = await fetch(URL);
     let result = await res.json();
     return result.results
}

function Seacrh(){
     let [query, setQuery] = useState(null)
     let [include, setInclude] = useState({movie: true, tv: true})

     let [movies, setMovies] = useState([]);
     let [tvs, setTvs] = useState([]);

     let [isSearched, setIsSearched] = useState(false)

     const API_KEY = "f2389eed03b839edeb2178897fa33c6d"
    
     const filter = (e)=>{
          let name = e.target.name
          let value = e.target.checked
          let filter = { ...include, [name]: value}
          setInclude(filter)
          console.log(include)
     }
     const fetchResult = (e)=>{
          e.preventDefault();
          let queryString = query ? query : "John Wick"
          
          let movie_url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${queryString}`
          let tv_url = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${queryString}`
          
          setIsSearched(true)      
          console.log(queryString)

          if(include.movie==include.tv){
               fetchURL(movie_url).then(res=>setMovies(res))
               fetchURL(tv_url).then(res=>setTvs(res))
          }
          else if(include.movie){
               setTvs([])
               fetchURL(movie_url).then(res=>setMovies(res))
          }
          else if(include.tv){
               setMovies([])
               fetchURL(tv_url).then(res=>setTvs(res))
          }

     }
     console.log(movies)
     return (
          <section className="search-wrapper dashboard-content">
               <form className="search-box" onSubmit={fetchResult}>
                    <div className='top'>
                    <input 
                         type="text"
                         value={query}
                         onChange={(e)=>setQuery(e.target.value)}
                         placeholder="John Wick" 
                    />
                    <button>
                         <i className="ri-search-2-line" />
                    </button>
                    </div>
                    <div className='bottom'>
                         <span>Filter: </span>
                         <label> <input type="checkbox" name="movie" onChange={filter} checked={include.movie} />Movies</label>
                         <label> <input type="checkbox" name="tv" onChange={filter} checked={include.tv} />TVs</label>
                    </div>
                    
               </form>
               {
                    (isSearched) ?
                    <div className="result-box">
                         {isSearched}
                         {movies.length>0 && <SearchList media="movie" list={movies} />}
                         {tvs.length>0 && <SearchList media="tv" list={tvs} />}
                    </div> : null
               }
          </section>
     )
}


export default Seacrh