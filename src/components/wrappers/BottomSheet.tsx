import {useRef, useEffect} from 'react';
import style from './BottomSheet.module.scss';

interface BottomSheetProps {
  onClose: () => void;
}

type BottomSheetType = React.FC<BottomSheetProps>;

const BottomSheet: BottomSheetType = ({onClose}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [containerRef, onClose]);
  return (
    <>

      <div className={`${style.container} container`}>
        <div ref={containerRef} className={`${style.wrapper} wrapper`}>
          <div className={style.wrap}>
            <header>
              <h3>Payment method</h3>
              <button className={style.iconClose} onClick={onClose}><i className="ic"/></button>
            </header>

            <section>
              요기안에 자유롭게 내용 들어갑니다
            </section>

            <div className={style.btnWrap}>
              <button className="btn bg-dark pull xl">Making a reservation</button>
            </div>
          </div>


        </div>
      </div>


    </>
  );
};

export default BottomSheet;
