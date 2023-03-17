import React from 'react'
import styles from "./Form.module.scss"
interface IntForm{
    children:any;
    OnSubmit:any
}

const Form = ({children , OnSubmit}:IntForm) => {
  return (
    <form className={styles.form} onSubmit={OnSubmit}>
        {
            children
        }
    </form>
  )
}

export default Form