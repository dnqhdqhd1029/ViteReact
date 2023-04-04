import {useState} from 'react';
import style from './Modal.module.scss';

interface ModalProps {
  onClose: () => void;
}


const Modal = ({onClose}: ModalProps) => {


  return (

    <div className={style.container}>
      <div className={style.wrap}>

        <div className={style.content}>
          <strong>Reservation cancellation completed</strong>
          <div>
            No other payment method is registered. This payment method cannot be released by the representative card.
            No other payment method is registered. This payment method cannot be released by the representative card.sNo other payment method is registered. This payment method cannot be released by
            <br/><br/>
            Incheon International Airport:<span className="text-primary">15,000 won</span>
            Gimpo Airport: <span className="text-primary">15,000 won</span>

          </div>

        </div>


        <div className={style.btnWrap}>
          <button onClick={onClose}>Cancel</button>
          <button className="text-primary">Confirm</button>
        </div>
      </div>

    </div>


  );
};

export default Modal;
