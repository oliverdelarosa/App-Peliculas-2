import React from 'react'
import styles from "./Moviescard.module.css"

const Moviescard = ({movie}) => {
    const imgurl= "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <div className={styles.movieCard}>
        <img  
        width={230}
        height={345}
        className={styles.movieImg} src={imgurl} alt={movie.title} />
      <li> {movie.title}</li>
    </div>
  )
}

export default Moviescard
