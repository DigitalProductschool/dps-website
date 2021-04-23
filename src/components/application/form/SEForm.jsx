import * as React from 'react';
import { useReducer } from 'react';

const initialState = {
  project: '',
  front: '',
  back: '',
  learn: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_PROJECT':
      return {
        ...state,
        project: action.payload.value,
      };

    case 'CHANGE_FRONT':
      return {
        ...state,
        front: action.payload.value,
      };

    case 'CHANGE_BACK':
      return {
        ...state,
        back: action.payload.value,
      };

    case 'CHANGE_LEARN':
      return {
        ...state,
        learn: action.payload.value,
      };
  }
}

export function SEForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="application-form__field-wrapper">
        <label className="application-form__label" htmlFor="project">
          Tell us about the favourite project you have worked on.
        </label>
        <label className="application-form__smalllabel">
          Describe goal, Used technologies etc.
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
        <label className="application-form__label" htmlFor="back">
          Do you have exprience working on a backend application?
        </label>
        <label className="application-form__smalllabel">
          If yes, please describe the project you worked on.
        </label>
        <textarea
          className="application-form__input application-form__input--textarea"
          type="text"
          id="back"
          name="back"
          value={state.back}
          onChange={e =>
            dispatch({
              type: 'CHANGE_BACK',
              payload: { value: e.target.value },
            })
          }
          required
        />
      </div>

      <div className="application-form__field-wrapper">
        <label className="application-form__label" htmlFor="front">
          Do you have experience building a frontend application?
        </label>
        <label className="application-form__smalllabel">
          If yes, please describe the project you worked on.
        </label>
        <textarea
          className="application-form__input application-form__input--textarea"
          type="text"
          id="front"
          name="front"
          value={state.front}
          onChange={e =>
            dispatch({
              type: 'CHANGE_FRONT',
              payload: { value: e.target.value },
            })
          }
          required
        />
      </div>

      <div className="application-form__field-wrapper">
        <label className="application-form__label" htmlFor="learn">
          What do you plan to learn at DPS?
        </label>
        <textarea
          className="application-form__input application-form__input--textarea"
          id="learn"
          name="learn"
          value={state.learn}
          onChange={e =>
            dispatch({
              type: 'CHANGE_LEARN',
              payload: { value: e.target.value },
            })
          }
          required
        />
      </div>
    </>
  );
}
