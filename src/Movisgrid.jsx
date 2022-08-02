import React from 'react';
import movies from "./movies.json";
import Moviescard from './Moviescard';
import styles from "./Moviescard.module.css"
const Movisgrid = () => {
    console.log(movies);
  return (
    <div>
      <ul className={styles.moviesGrid}>
        {movies.map((movie)=>
           <Moviescard key={movie.id} movie={movie}/>
        )}

      </ul>
    </div>
  )
}

export default Movisgrid
