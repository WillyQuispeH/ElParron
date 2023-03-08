import React, { useState } from 'react'
import styles from './InputDate.module.scss'
interface IntInputDate{
    width:string,
    label: string,
}
const InputDate = ({width,label}:IntInputDate) => {
    
  return (
    <div className={styles.InputDate} style={{width}}>
    <label  >{label}</label>
    <input type="date" />
    </div>
  )
}

export default InputDate