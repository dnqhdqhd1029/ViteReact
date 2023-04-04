import {useState} from 'react';
import style from './TopNav.module.scss';


function TopNav() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };


  return (

    <div className={style.container}>

      <button onClick={handleMenuClick}>
        {showMenu ? <i className={style.icPrev}>이전</i> : <i className={style.icMenu}>메뉴</i>}
      </button>
      <h2>Domestic Card RegistrationDomestic Card Registration </h2>
      <button><i className={style.icDownload}>다운로드</i></button>

    </div>


  );
}

export default TopNav;
