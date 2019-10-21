import * as React from 'react';
import { useState } from 'react';

export default function Accordion(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <div
        style={{
          border: 0,
          cursor: 'pointer',
          display: 'flex',
          borderBottom: '3px solid #D8D8D8',
        }}
      >
        <h2
          style={{
            flexGrow: '1',
          }}
        >
          {props.title}
        </h2>
        <button
          style={{
            fontSize: '35px',
            background: 'white',
            border: 0,
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '-' : '+'}
        </button>
      </div>
      <div
        style={{
          transition: 'max-height 0.15s',
          maxHeight: isOpen ? '1000px' : '0',
          overflow: 'hidden',
        }}
      >
        {props.children}
      </div>
    </section>
  );
}
