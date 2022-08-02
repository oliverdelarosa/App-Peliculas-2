import React from 'react'
import Movisgrid from './Movisgrid'
import styles from "./Moviescard.module.css"
const Appp = () => {
  return (
    <div>
    <header>
        <h1 className={styles.title}>Movies</h1>
    </header>
    <main>
        <Movisgrid/>
    </main>
    
    </div>
  )
}

export default Appp
