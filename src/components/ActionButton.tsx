import styles from '../styles/ActionButton.module.scss';

interface ActionButtonProps {
  onClick: () => void;
  text: string;
}

function ActionButton({ onClick, text }: ActionButtonProps) {
  return (
    <button onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
}

export default ActionButton;
