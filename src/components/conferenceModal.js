import React, { useState, useEffect } from 'react';
import Modal from '../components/shared/modal/index';

const ConferenceModal = () => {
  const [isShown, setIsShown] = useState(false);

  const closeModal = () => {
    setIsShown(false);
  };

  const redirect = () => {
    window.location.replace(
      'https://www.eventbrite.de/e/dps-global-conference-2022-tickets-321046076457'
    );
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
      <Modal className="conferenceModal" onClose={() => closeModal(undefined)}>
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
        <video style={{ width: '95%' }} controls>
          <source src="/assets/Conference.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h4>
          <br />
          <b>DPS Global Conference 2022, June 8th-9th</b>
          <br />
        </h4>
        <h5
          style={{
            marginTop: '0px',
            fontWeight: '300',
            fontSize: '14px',
          }}
        >
          We bring people of different educational, professional backgrounds,
          gender, ages and cultures together to share individual challenges and
          support one another.
        </h5>

        <button
          className="u-button u-button--reversed"
          style={{
            textTransform: 'capitalize',
          }}
          onClick={() => redirect()}
        >
          <b>Information &amp; Tickets</b>
        </button>
      </Modal>
    </React.Fragment>
  ) : null;
};

export default ConferenceModal;
