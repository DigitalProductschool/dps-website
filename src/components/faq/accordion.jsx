import * as React from 'react';
import { useState } from 'react';

export default function Accordion(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      style={{
        borderBottom: '3px solid #D8D8D8',
      }}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          border: 0,
          cursor: 'pointer',
          display: 'flex',
        }}
      >
        <h2
          style={{
            flexGrow: '1',
          }}
        >
          {props.title}
        </h2>
        <span
          style={{
            fontSize: '35px',
            background: 'white',
            border: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '35px',
          }}
        >
          {isOpen ? '-' : '+'}
        </span>
      </div>
      <div
        style={{
          transition: 'max-height 0.15s',
          maxHeight: isOpen ? '1000px' : '0',
          overflow: 'hidden',
        }}
      >
        {props.children}
        <br />
      </div>
    </section>
  );
}
