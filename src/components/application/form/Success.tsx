import * as React from 'react';
import { Link } from 'gatsby';

interface SuccessMessageProps {
  name: string;
  batch: string;
}

export default function SuccessMessage(props: SuccessMessageProps) {
  return (
    <>
      <p style={{ textAlign: 'left', marginTop: '70px' }}>
        Dear {props.name},{' '}
      </p>
      <p style={{ textAlign: 'left' }}>
        Thank you for your interest in being part of Digital Product School.
      </p>
      <p style={{ textAlign: 'left' }}>
        You applied for Batch#{props.batch}. We give our best to evaluate your
        application, but since a lot of great people want to be part of DPS it
        may take some time. <br />
      </p>
      <p style={{ textAlign: 'left' }}>
        We will start to evaluate the applications about 12 weeks before the
        next batch starts and get in touch with you. If you and your skills fit
        our needs we will invite you to an interview. At the latest four weeks
        before the batch starts you will know if you are in the next round.
      </p>

      <p style={{ textAlign: 'left' }}>
        If you have any questions, just email us at{' '}
        <a
          href="mailto:hello@dpschool.io"
          className="u-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ zIndex: 0 }}>hello@dpschool.io. </span>
        </a>{' '}
        Or stay in touch with us on social media:{' '}
        <a
          href="https://www.instagram.com/digitalproductschool/"
          className="u-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ zIndex: 0 }}>Instagram, </span>
        </a>{' '}
        <a
          href="https://www.facebook.com/digitalproductschool/"
          className="u-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ zIndex: 0 }}>Facebook, </span>
        </a>{' '}
        <a
          href="https://www.linkedin.com/company/digital-product-school/"
          className="u-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ zIndex: 0 }}>LinkedIn, </span>
        </a>{' '}
        <a
          href="https://twitter.com/dpschool_io"
          className="u-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ zIndex: 0 }}>Twitter, </span>
        </a>{' '}
        <a
          href="https://leaks.digitalproductschool.io/"
          className="u-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ zIndex: 0 }}>Medium, </span>
        </a>{' '}
        <a
          href="https://www.youtube.com/c/DigitalProductSchool"
          className="u-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ zIndex: 0 }}>Youtube. </span>
        </a>{' '}
      </p>
      <p style={{ textAlign: 'left' }}>Your DPS-Team</p>

      <Link
        to="/"
        className="u-button u-button--reversed"
        style={{
          textDecoration: 'none',
          padding: '10px',
          marginTop: '10px',
          display: 'inline-block',
        }}
      >
        back to home
      </Link>
    </>
  );
}
