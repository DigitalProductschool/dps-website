import React, { useState, useEffect } from 'react';
import Modal from '../components/shared/modal/index';

const ConferenceModal = () => {
  const [isShown, setIsShown] = useState(false);

  const closeModal = () => {
    setIsShown(false);
  };

  const redirect = () => {
    window.location.replace(
      'http://www.globalconference.digitalproductschool.io/'
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
        <img src="/assets/Conference.jpg" style={{ width: '90%' }} />
        <h4>
          <b>DPS Global Conference 2021 - Connecting Digital Thinkers</b>
          <br />
          <b>May 21-22, 2021</b>
        </h4>
        <h5
          style={{
            marginTop: '0px',
            fontWeight: '300',
            fontSize: '14px',
          }}
        >
          Be part of this unique get-together of digital product makers! We
          celebrate and gather over 500 alumni of DPS from over 60 countries.
          Workshops about digital product development and personal growth and
          inspiring speakers await you - including Jeff Gothelf, author of the
          books Lean UX and Forever Employable.
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
