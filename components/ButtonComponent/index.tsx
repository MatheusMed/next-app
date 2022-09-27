import styles from './styles.module.css';

type Props = {
  label: string;
  onTap: () => void;
}
export const ButtonComponent = ({ label, onTap }: Props) => {

  return (
    <button className={styles.myBtn} onClick={onTap} >{label}</button>
  );
}