import React from 'react'

import styles from './Title.module.scss'

interface IntTitle{
    title:string
}

const Title = ({title} :IntTitle) => {
  return (
    <div className={styles.title} >
        <h1>{title}</h1>
    </div>
  )
}

export default Title