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

export function PMCForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [dragging, setDragging] = useState(false);
  const [draggingItemIndex, setDraggingItemIndex] = useState(-1);
  const [startPageY, setStartPageY] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const [list, setList] = useState([
    'Marketing & Strategy',
    'Data & Analytics',
    'Storytelling & Writing',
    'Photograhy & Edition',
    'Video-Production',
  ]);

  const dragItem = useRef();
  const dragItemNode = useRef();

  const handletDragStart = (e, item) => {
    dragItemNode.current = e.target;
    dragItemNode.current.addEventListener('dragend', handleDragEnd);
    dragItem.current = item;
    setDragging(true);
  };

  const handleTouchStart = (event, index) => {
    document.addEventListener('touchmove', event.preventDefault());
    setDraggingItemIndex(index);
    setStartPageY(event.touches[0].pageY);
  };

  const handleTouchEnd = event => {
    document.removeEventListener('touchmove', event.preventDefault());
    setDraggingItemIndex(-1);
    setStartPageY(0);
  };

  const move = (arr, startIndex, isMoveDown) => {
    let newArr = arr.slice();
    let moveItem = newArr.splice(startIndex, 1)[0];
    if (isMoveDown) {
      newArr.splice(startIndex + 1, 0, moveItem);
    } else {
      newArr.splice(startIndex - 1, 0, moveItem);
    }
    return newArr;
  };

  const handleTouchMove = event => {
    let offset = event.touches[0].pageY - startPageY;
    let draggingIndex = draggingItemIndex;
    const lineHeight = 40;
    if (offset > lineHeight && draggingIndex < list.length - 1) {
      offset -= lineHeight;
      setList(move(list, draggingIndex, true));
      setDraggingItemIndex(draggingIndex + 1);
      setStartPageY(startPageY + lineHeight);
    } else if (offset < -lineHeight && draggingIndex > 0) {
      offset += lineHeight;
      setList(move(list, draggingIndex, false));
      setDraggingItemIndex(draggingIndex - 1);
      setStartPageY(startPageY - lineHeight);
    }
    setOffsetY(offset);
  };

  const handleDragEnter = (e, item) => {
    if (dragItemNode.current !== e.target) {
      setList(oldList => {
        let newList = JSON.parse(JSON.stringify(oldList));
        newList.splice(item, 0, newList.splice(dragItem.current, 1)[0]);
        dragItem.current = item;
        console.log(newList);
        return newList;
      });
    }
  };

  const handleDragEnd = e => {
    setDragging(false);
    dragItem.current = null;
    dragItemNode.current.removeEventListener('dragend', handleDragEnd);
    dragItemNode.current = null;
  };

  const getStyles = item => {
    if (dragItem.current === item) {
      return 'dnd-item dragging';
    }
    return 'dnd-item';
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
        <label className="application-form__label" htmlFor="project">
          Where are our strengths?
        </label>
        <label className="application-form__smalllabel">
          Please rank the fields below according to the knowledge and skills you
          already have. Drag and drop options.
        </label>
        <div className="dnd-group" style={{ cursor: 'grab' }}>
          {list.map((strength, strengthIndex) => (
            <div
              className={dragging ? getStyles(strengthIndex) : 'dnd-item'}
              draggable
              key={strength}
              onTouchStart={e => handleTouchStart(e, strengthIndex)}
              onTouchEnd={e => {
                handleTouchEnd(e);
              }}
              onTouchMove={e => {
                handleTouchMove(e);
              }}
              onDragStart={e => handletDragStart(e, strengthIndex)}
              onDragEnter={
                dragging
                  ? e => {
                      handleDragEnter(e, strengthIndex);
                    }
                  : null
              }
            >
              <div className="u-grid-1-6-3">
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
