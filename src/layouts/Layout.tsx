import React, {useState, useRef, useEffect} from 'react';
import Header from '@/components/wrappers/Header';
import BottomSheet from '@/components/wrappers/BottomSheet';
import Modal from '@/components/wrappers/Modal';


const Layout = () => {
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [showModal, setShowModal] = useState(false);


  const toggleBottomSheet = () => {
    setShowBottomSheet(!showBottomSheet);
  };

  const closeBottomSheet = () => {
    setShowBottomSheet(false);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };


  return (
    <div>

      <Header/>

      <section className="container">
        이안에 컨텐츠 내용이 들어갑니다

        <button className="btn bg-primary radius ml-1 " onClick={toggleModal}>
          modal 호출
        </button>

        <div className="btn fixed">
          <button className="btn bg-dark pull xl" onClick={toggleBottomSheet}>
            BottomSheet 호출
          </button>
        </div>

      </section>
      {showBottomSheet &&
        (
          <BottomSheet onClose={closeBottomSheet}/>
        )
      }

      {showModal &&
        (
          <Modal onClose={closeModal}/>
        )
      }


    </div>
  );
};

export default Layout;
