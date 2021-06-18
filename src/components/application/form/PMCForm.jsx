import * as React from 'react';
import { useReducer, useState, useEffect, useRef } from 'react';
import dots from '../../../../static/assets/dots.svg';

const initialState = {
  project: '',
  strengths: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_PROJECT':
      return {
        ...state,
        project: action.payload.value,
      };

    case 'CHANGE_STRENGTHS':
      return {
        ...state,
        strengths: action.payload.value,
      };
  }
}

export function PMCForm({ callback }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    callback(state);
  });
  const [dragging, setDragging] = useState(false);
  const [startPageY, setStartPageY] = useState(0);

  const [list, setList] = useState([
    'Marketing & Strategy',
    'Data & Analytics',
    'Storytelling & Writing',
    'Photograhy & Edition',
    'Video-Production',
  ]);

  const dragItem = useRef();
  const dragItemNode = useRef();

  const handleDragStart = (event, index) => {
    dragItemNode.current = event.target;
    if (event.touches) {
      dragItemNode.current.addEventListener('touchmove', event);
      setStartPageY(event.touches[0].pageY);
    } else {
      dragItemNode.current.addEventListener('dragend', handleDragEnd);
    }
    dragItem.current = index;
    setDragging(true);
    document.body.classList.add('overflow-hidden');
  };

  const handleDragEnter = (event, index) => {
    if (event.touches) {
      let offset = event.touches[0].pageY - startPageY;
      const lineHeight = 40;
      if (offset > lineHeight && index < list.length - 1) {
        offset -= lineHeight;
        drag(index + 1);
        setStartPageY(startPageY + lineHeight);
      } else if (offset < -lineHeight && index > 0) {
        offset += lineHeight;
        drag(index - 1);
        setStartPageY(startPageY - lineHeight);
      }
      //   }
    } else {
      if (dragItemNode.current !== event.target) {
        drag(index);
      }
    }
  };

  const drag = index => {
    setList(oldList => {
      let newList = JSON.parse(JSON.stringify(oldList));
      let moveItem = newList.splice(dragItem.current, 1)[0];
      newList.splice(index, 0, moveItem);
      dragItem.current = index;
      return newList;
    });
  };

  const handleDragEnd = event => {
    setDragging(false);
    dragItem.current = null;
    if (event.touches) {
      dragItemNode.current.removeEventListener('touchmove', event);
      setStartPageY(0);
    } else {
      dragItemNode.current.removeEventListener('dragend', handleDragEnd);
    }
    dragItemNode.current = null;
    document.body.classList.remove('overflow-hidden');
    dispatch({
      type: 'CHANGE_STRENGTHS',
      payload: { value: list },
    });
  };

  const getStyles = item => {
    if (dragItem.current === item) {
      return 'application-dnd-item application-dnd-item-dragging';
    }
    return 'application-dnd-item';
  };
  return (
    <>
      <div className="application-form__field-wrapper">
        <label className="application-form__label" htmlFor="project">
          Show us your projects, artworks, designs, or other projects!
        </label>
        <label className="application-form__smalllabel">
          For example, provide us the link to your website or your profile on
          Instagram, Pinterest, or Youtube or wherever you think we can get an
          impression of you.
        </label>
        <textarea
          className="application-form__input application-form__input--textarea"
          type="text"
          id="project"
          name="project"
          value={state.project}
          onChange={e =>
            dispatch({
              type: 'CHANGE_PROJECT',
              payload: { value: e.target.value },
            })
          }
          required
        />
      </div>
      <div className="application-form__field-wrapper">
        <label className="application-form__label" htmlFor="strengths">
          Where are our strengths?
        </label>
        <label className="application-form__smalllabel">
          Please rank the fields below according to the knowledge and skills you
          already have. Drag and drop options.
        </label>
        <div className="application-dnd-group" style={{ cursor: 'grab' }}>
          {list.map((strength, strengthIndex) => (
            <div
              className={
                dragging ? getStyles(strengthIndex) : 'application-dnd-item'
              }
              draggable
              key={strength}
              onTouchStart={e => handleDragStart(e, strengthIndex)}
              onTouchEnd={e => handleDragEnd(e)}
              onTouchMove={e => handleDragEnter(e, strengthIndex)}
              onDragStart={e => handleDragStart(e, strengthIndex)}
              onDragEnter={
                dragging
                  ? e => {
                      handleDragEnter(e, strengthIndex);
                    }
                  : null
              }
            >
              <div className="application-dnd-grid">
                <div>{strengthIndex + 1}.</div>
                <div>{strength}</div>
                <img src={dots} width="10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
