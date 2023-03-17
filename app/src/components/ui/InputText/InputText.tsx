import styles from "./InputText.module.scss";

interface IntInputText {
  onChange:any,
  type: string;
  label: string;
  place?: string;
  name?:string;
  width: string;
  value:string
}
const InputText = ({ type, label, place, name, width , value, onChange}: IntInputText) => {
  return (
    <div className={styles.inputText} style={{ width }}>
      <label>{label}</label>
      <input type={type} placeholder={place} value={value} onChange={onChange} name={name} />
    </div>
  );
};

export default InputText;
