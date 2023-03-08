import styles from "./Button.module.scss"
interface IntButton{
    onclick:any
    valor:string,
    width:string,
    height:string
}
const Button = ({onclick,valor,width, height}:IntButton) => {
  return (
    <div className={styles.button} style={{width, height}} onClick={onclick}>
        <button>{valor}</button>
    </div>
  )
}
export default Button