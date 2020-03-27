import React, { useState, useEffect } from 'react';
import Modal from '../components/shared/modal/index';

const Corona = () => {
  const [isShown, setIsShown] = useState(false);

  const closeModal = () => {
    setIsShown(false);
  };

  useEffect(() => {
    if (!sessionStorage.popupModal) {
      const timer = setTimeout(() => {
        setIsShown(true);
        sessionStorage.popupModal = 1;
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.keyCode === 27) {
        closeModal(undefined);
      }
    };

    document.addEventListener('keydown', handleKeyDown, false);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return isShown ? (
    <React.Fragment>
      <div id="modal-root"></div>
      <Modal className="corona" onClose={() => closeModal(undefined)}>
        <span
          style={{
            position: 'absolute',
            top: '12px',
            right: '20px',
            fontSize: '24px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
          onClick={() => closeModal()}
        >
          x
        </span>
        <h5
          style={{
            marginTop: '25px',
            fontWeight: '300',
            fontSize: '14px',
          }}
        >
          In times like these nobody can predict the future. How long will we
          have to work from home? When will we be allowed to travel again?
          Difficult Questions ... But two things we know for sure: <br /> <br />
          <b>
            DPS will go on! <br />
            We will start the next batches as planned.
            <br />
            And we would like to start them with YOU!{' '}
          </b>
          <br />
          <br />
          Maybe parts of DPS have to take place remotely, but we will do
          everything we can to make it a unique experience for you! <br />
          So use your time now, update your CV, write a motivational cover
          letter and apply for our next batches! <br />
          <br />
          See you soon at Digital Product School,
          <br />
          Your Core Team
        </h5>

        <button
          className="u-button u-button--reversed"
          style={{
            textTransform: 'capitalize',
          }}
          onClick={() => closeModal()}
        >
          <b>Let's go!</b>
        </button>
      </Modal>
    </React.Fragment>
  ) : null;
};

export default Corona;
