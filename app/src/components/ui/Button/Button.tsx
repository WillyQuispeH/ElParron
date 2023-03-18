import styles from "./Button.module.scss"
interface IntButton{
    onClick?:any
    valor:string,
    width:string,
    height:string
}
const Button = ({onClick,valor,width, height}:IntButton) => {
  return (
    <div className={styles.button} style={{width, height}} >
        <button onClick={onClick}>{valor}</button>
    </div>
  )
}
export default Button