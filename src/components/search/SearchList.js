import React from "react"

function SearchList(props){
     let list = props.list
     let media = props.media
     
     const searchlist = (media==="movie")
                  ? list.map((item,index)=><MovieCard item={item} key={index} />) 
                  : list.map((item,index)=><TvCard item={item} key={index} />)


     return (
          <div className="search-list">
               <header>{media}</header>
               <div className='cards'>
                    {searchlist}
               </div>
          </div>
     )
}


function MovieCard(props){
     let item = props.item
     let backdropPath = (item.backdrop_path==undefined)
                         ? `linear-gradient(var(--colorB),var(--colorC))`  
                         : `url(https://image.tmdb.org/t/p/w200/${item.backdrop_path})`
     let backdrop = {
          background: `${backdropPath}`,
          backgroundRepeat: `noRepeat`,
          backgroundPosition: `center`,
          backgroundSize: `cover`,
     }
     let posterPath = (item.poster_path==undefined)
                         ? `linear-gradient(var(--colorA),var(--colorD))`  
                         : `url(https://image.tmdb.org/t/p/w200/${item.poster_path})`

     let poster = {
          background: `${posterPath}`,
          width:`410px`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
     }

     return (
          <div className='movie-card' style={backdrop}>
               <div className="content">
                    <div className="poster" style={poster}></div>
                    <div className="details">
                         <div className="title">{item.title}</div>
                         <div className="genre">{item.genre}</div>
                         <div className="overview">{(item.overview.length>100)?item.overview.substr(0,100)+ '...':item.overview}</div>
                         <div className="ratings">
                              <span>{item.vote_average}</span>
                         </div>
                    </div>
               </div>
          </div>
     )
}

function TvCard(props){
     let item = props.item

     let backdropPath = (item.backdrop_path==undefined)
                         ? `linear-gradient(var(--colorB),var(--colorC))`  
                         : `url(https://image.tmdb.org/t/p/w200/${item.backdrop_path})`
     
     let backdrop = {
          background: `${backdropPath}`,
          backgroundRepeat: `noRepeat`,
          backgroundPosition: `center`,
          backgroundSize: `cover`,
     }
     let posterPath = (item.poster_path==undefined)
                         ? `linear-gradient(var(--colorA),var(--colorD))`  
                         : `url(https://image.tmdb.org/t/p/w200/${item.poster_path})`
     let poster = {
          background: `${posterPath}`,
          width:`600px`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
     }

     return (
          <div className='movie-card' style={backdrop}>
               <div className="content">
                    <div className="poster" style={poster}></div>
                    <div className="details">
                         <div className="title">{item.original_name}</div>
                         <div className="genre">{item.genre}</div>
                         <div className="overview">{(item.overview.length>100)?item.overview.substr(0,100)+ '...':item.overview}</div>
                         <div className="ratings">
                              <span>{item.vote_average}</span>
                         </div>
                    </div>
               </div>
          </div>
     )
}
export default SearchList