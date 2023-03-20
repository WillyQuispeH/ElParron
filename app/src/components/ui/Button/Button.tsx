import styles from "./Button.module.scss"
interface IntButton{
    onClick?:any
    valor:string,
    width:string,
    disabled?:boolean,
    height:string
}
const Button = ({onClick,valor,width, height, disabled}:IntButton) => {
  return (
    <div className={styles.button} style={{width, height}} >
        <button onClick={onClick} disabled={disabled}>{valor}</button>
    </div>
  )
}
export default Button