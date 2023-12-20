import { useState } from "react";
import ReactDOM from "react-dom";
import S from "./Works.module.css"
import PropTypes from 'prop-types';

import photoshop1 from "./../../assets/image/photoshop1.png";
import photoshop2 from "./../../assets/image/photoshop2.png";
import illustrator from "./../../assets/image/illustrator.png";

function Modal({ isOpen, onClose, selectedImage }) {
  if (!isOpen || !selectedImage) return null;

  const handleModalClick = () => {
    onClose();
  };

  return ReactDOM.createPortal(
    <div className={S.modal} onClick={handleModalClick}>
      <div className={S.modalImageContainer}>
      </div>
      <img src={selectedImage} alt="모달 이미지" className={S.modalImage} />
    </div>,
    document.body
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  selectedImage: PropTypes.string,
};

function Photoshop() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleItemClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section className={S.photoshop}>
      <h3 className={S.projectTitle}>Photoshop & Illustrator</h3>
      <ul className={S.photoshopList}>
        <li className={S.photoshopItem} onClick={() => handleItemClick(photoshop1)}>
          <img src={photoshop1} alt="포토샵 작업물" />
        </li>
        <li className={S.photoshopItem} onClick={() => handleItemClick(photoshop2)}>
          <img src={photoshop2} alt="포토샵 작업물" />
        </li>
        <li className={S.photoshopItem} onClick={() => handleItemClick(illustrator)}>
          <img src={illustrator} alt="일러스트레이터 작업물" />
        </li>
        <li className="w-full font-notoKR text-[2rem] mt-[3%] select-none">
          추후 작업물들 업로드 예정입니다 :D
        </li>
      </ul>
      <Modal isOpen={modalOpen} onClose={closeModal} selectedImage={selectedImage} />
    </section>
  );
}

export default Photoshop;