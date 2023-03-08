
import styles from "./ButtonIcon.module.scss";

interface IntButtonIcon {
  onclick: any;
  icon: string;
  typeButton: 'circle' |'square';
}

const ButtonIcon = ({ onclick, icon, typeButton }: IntButtonIcon) => {


  return (
    <div className={styles[typeButton]}>
      <span className="material-symbols-outlined" onClick={onclick}>
        {icon}
      </span>
    </div>
  );
};

export default ButtonIcon;
