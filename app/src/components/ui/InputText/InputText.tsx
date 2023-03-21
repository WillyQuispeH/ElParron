import { useState } from "react";

import styles from "./InputText.module.scss";

interface IntInputText {
  onChange: any;
  onBlur?: any;
  onFocus?: any;
  isValid?: boolean;
  type: string;
  label: string;
  place?: string;
  name?: string;
  width: string;
  value: string;
  maxLength?: number;
}

const InputText = ({
  type,
  label,
  place,
  name,
  width,
  value,
  maxLength,
  onChange,
  onBlur,
  onFocus,
  isValid = true,
}: IntInputText) => {
  return (
    <div className={styles.inputText} style={{ width }}>
      <label>{label}</label>
      <input
        type={type}
        placeholder={place}
        value={value}
        onChange={onChange}
        name={name}
        style={{ background: isValid ? "none" : "rgb(255 0 0 / 10%)" }}
        onBlur={onBlur}
        onFocus={onFocus}
        maxLength={maxLength}
      />
    </div>
  );
};

export default InputText;
