import React from "react"
import {Link} from "react-router-dom"
import "./style.css"

function Sidenav(){
     return (
          <section className='sidenav'>
               <div className='brand-typography'>chalchitra</div>
               <nav className='nav'>

                    <Link className='item' to="search">
                         <span className='icon'><i className="ri-search-line"></i></span>
                         <span className='text'>search</span>
                    </Link>
                    <Link className='item active' to="home">
                         <span className="icon"><i className="ri-home-2-line"></i></span>
                         <span className="text">home</span>
                    </Link>
                    <Link className='item' to="collection">
                         <span className="icon"><i className="ri-bookmark-line"></i></span>
                         <span className="text">collection</span>
                    </Link>

               </nav>

          </section>
     )
}

export default Sidenav