import styles from "./InputText.module.scss";

interface IntInputText{
    type : string,
    label : string,
    place?:string,
    width : string
}
const InputText = ( {type,label,place, width} : IntInputText) => {
  return (
    <div className={styles.inputText} style={{width}}>
    <label >{label}</label>
    <input type={type} placeholder={place}/>
    </div>
  )
}

export default InputText