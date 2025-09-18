import styles from './termsmodal.module.css';
import type { TermsModalProps } from '../../types/components.types';
import termsText from '../../../mock/terms';
import { FaArrowLeft } from "react-icons/fa";

const TermsModal = ({ isOpen, onClose }: TermsModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Termos e Condições</h2>

        <p className={styles.text}>
          {termsText.split('\n').map((line, index) =>
            line.trim() ? <p key={index}>{line}</p> : <br key={index} />
          )}
        </p>
        <div className={styles.buttons}>
          <button className={styles.button1} onClick={() => {
            onClose();
          }}>
            <i><FaArrowLeft /></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
