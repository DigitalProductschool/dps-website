import * as React from 'react';
import { useRef, useCallback, useReducer, useEffect, useState } from 'react';

const initialState = {
  name: 'Hello', // string
  email: 'hello@example.com', // string
  batch: '9', // number as string, for instance '8', '9', etc
  source: 'dasfas', // string, free text
  userType: 'student', // string, 'student' | 'graduate' , etc...
  consent: 'true', // string, 'true' | 'false'
  scholarship: 'true', // string, 'true' | 'false'
  cv: null,
  coverLetter: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.payload.value,
      };

    case 'CHANGE_EMAIL':
      return {
        ...state,
        email: action.payload.value,
      };

    case 'CHANGE_CV':
      return {
        ...state,
        cv: action.payload.file,
      };

    case 'CHANGE_COVER_LETTER':
      return {
        ...state,
        coverLetter: action.payload.file,
      };

    case 'CHANGE_BATCH':
      return {
        ...state,
        batch: action.payload.value,
      };

    case 'CHANGE_SCHOLARSHIP':
      return {
        ...state,
        scholarship: action.payload.value,
      };

    case 'CHANGE_LEARN_ABOUT_SOURCE':
      return {
        ...state,
        source: action.payload.value,
      };

    case 'CHANGE_CONSENT':
      return {
        ...state,
        consent: String(action.payload.value),
      };

    default:
      return {
        ...state,
      };
  }
}

export default function Form(props) {
  const SUBMIT_URL = process.env.GATSBY_HANDLE_APPLICATION_ENDPOINT;
  const fileInputCVRef = useRef(null);
  const uploadCVLabelRef = useRef(null);
  const fileInputCoverLetterRef = useRef(null);
  const [fileUploadError, setFileUploadError] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialState);
  const clickFileInputCV = useCallback(() => {
    fileInputCVRef.current.click();
  }, []);

  const clickFileInputCoverLetter = useCallback(() => {
    fileInputCoverLetterRef.current.click();
  }, []);

  const submitForm = e => {
    if (!state.cv) {
      setFileUploadError(true);
      uploadCVLabelRef.current.scrollIntoView();
    }

    const formData = new FormData();

    // put cv & coverLetter at the end of formdata
    // because our middleware assumes processing of other
    // key-values first so they can be used when creating
    // filenames. Yep...
    for (const key in state) {
      if (key !== 'cv' && key !== 'coverLetter') {
        formData.append(key, state[key]);
      }
    }
    formData.append('coverLetter', state.coverLetter);
    formData.append('cv', state.cv);

    fetch(SUBMIT_URL, {
      method: 'POST',
      body: formData,
    });

    e.preventDefault();
  };

  useEffect(() => {
    setFileUploadError(null);
  }, [state]);

  return (
    <div className="u-content-wrapper">
      <div className="application-form-content">
        <div className="application-form-plate">
          <form
            className="application-form"
            name="application-form"
            method="POST"
            action={SUBMIT_URL}
            onSubmit={submitForm}
          >
            <div className="application-form__field-wrapper">
              <label className="application-form__label" htmlFor="name">
                What is your name?
              </label>
              <input
                className="application-form__input"
                type="text"
                id="name"
                name="name"
                value={state.name}
                onChange={e =>
                  dispatch({
                    type: 'CHANGE_NAME',
                    payload: { value: e.target.value },
                  })
                }
                required
              />
            </div>
            <div className="application-form__field-wrapper">
              <label className="application-form__label" htmlFor="email">
                What is your email address?
              </label>
              <input
                className="application-form__input"
                type="email"
                id="email"
                name="email"
                value={state.email}
                onChange={e =>
                  dispatch({
                    type: 'CHANGE_EMAIL',
                    payload: { value: e.target.value },
                  })
                }
                required
              />
            </div>
            <div className="application-form__field-wrapper">
              <label
                className="application-form__label"
                htmlFor="describe-yourself"
              >
                Which of the following describes you best?
              </label>
              <select
                className="application-form__input"
                id="describe-yourself"
                name="userType"
                value={state.userType}
                onChange={e =>
                  dispatch({
                    type: 'CHANGE_DESCRIBE_YOURSELF',
                    payload: { value: e.target.value },
                  })
                }
                required
              >
                <option value="">Please select</option>
                <option value="student">Student</option>
                <option value="graduate">Graduate</option>
                <option value="phd">PhD</option>
                <option value="employee">Employee</option>
                <option value="entrepreneur">Entrepreneur</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="application-form__field-wrapper">
              <label
                className="application-form__label"
                htmlFor="batch-selection"
              >
                Which batch do you want to be part of?
              </label>
              <select
                className="application-form__input"
                id="batch-selection"
                name="batch"
                value={state.batch}
                onChange={e =>
                  dispatch({
                    type: 'CHANGE_BATCH',
                    payload: { value: e.target.value },
                  })
                }
                required
              >
                <option value="">Please select</option>
                <option value="9">Batch#9</option>
              </select>
            </div>
            <div className="application-form__field-wrapper">
              <label
                className="application-form__label"
                htmlFor="file-upload"
                ref={uploadCVLabelRef}
                style={fileUploadError ? { color: 'red' } : null}
              >
                Please upload your CV (PDF, max 5MB)
              </label>
              <label />
              <input
                onChange={e =>
                  dispatch({
                    type: 'CHANGE_CV',
                    payload: { file: e.target.files[0] },
                  })
                }
                accept="application/pdf"
                className="application-form__input"
                type="file"
                ref={fileInputCVRef}
                tabIndex={-1}
                id="file-upload"
              />
              <div
                className="application-form__input application_form__file-input-overlay"
                onClick={clickFileInputCV}
              >
                {state.cv && (
                  <span style={{ fontSize: '14px' }}>{state.cv.name} </span>
                )}
                {!state.cv && <>Choose file </>}
              </div>
              <button
                type="button"
                className={`application-form__file-button application-form__file-button--${props.track}`}
                onClick={clickFileInputCV}
              >
                <img src="/assets/icons/upload-icon.svg" alt="upload CV" />
              </button>
            </div>
            <div className="application-form__field-wrapper">
              <label
                className="application-form__label"
                id="scholarship-radiogroup-label"
              >
                Do you need the grants of 750 EUR per month?
              </label>
              <fieldset
                aria-labelledby="scholarship-radiogroup-label"
                className="scholarship-fieldset"
                required
              >
                <input
                  type="radio"
                  name="scholarship"
                  value="true"
                  id="scholarship-1"
                  checked={state.scholarship === 'true'}
                  onChange={e =>
                    dispatch({
                      type: 'CHANGE_SCHOLARSHIP',
                      payload: { value: e.target.value },
                    })
                  }
                  required
                />
                <label
                  htmlFor="scholarship-1"
                  className="scholarship-radio-label"
                >
                  Yes, I need the scholarship.
                </label>
                <input
                  type="radio"
                  name="scholarship"
                  value="false"
                  id="scholarship-2"
                  checked={state.scholarship === 'false'}
                  onChange={e =>
                    dispatch({
                      type: 'CHANGE_SCHOLARSHIP',
                      payload: { value: e.target.value },
                    })
                  }
                  required
                />
                <label
                  htmlFor="scholarship-2"
                  className="scholarship-radio-label"
                >
                  No, DPS can use the money to help fellow participants to cover
                  their living cost in Munich.
                </label>
              </fieldset>
            </div>
            <div className="application-form__field-wrapper">
              <label htmlFor="heard-from" className="application-form__label">
                Where did you learn about Digital Product School?
              </label>
              <textarea
                id="heard-from"
                className="application-form__input application-form__input--textarea"
                name="application-form"
                value={state.source}
                onChange={e =>
                  dispatch({
                    type: 'CHANGE_LEARN_ABOUT_SOURCE',
                    payload: { value: e.target.value },
                  })
                }
                required
              />
            </div>
            <div className="application-form__field-wrapper">
              <label
                className="application-form__label"
                htmlFor="file-upload-cover-letter"
              >
                Describe your motivation in a cover letter (Optional, PDF, max
                5MB)
              </label>
              <input
                className="application-form__input"
                type="file"
                accept="application/pdf"
                ref={fileInputCoverLetterRef}
                tabIndex={-1}
                id="file-upload-cover-letter"
                onChange={e =>
                  dispatch({
                    type: 'CHANGE_COVER_LETTER',
                    payload: { file: e.target.files[0] },
                  })
                }
              />
              <div
                className="application-form__input application_form__file-input-overlay"
                onClick={clickFileInputCoverLetter}
              >
                {state.coverLetter && (
                  <span style={{ fontSize: '14px' }}>
                    {state.coverLetter.name}
                  </span>
                )}
                {!state.coverLetter && <>Choose file </>}
              </div>
              <button
                type="button"
                className={`application-form__file-button application-form__file-button--${props.track}`}
                onClick={clickFileInputCoverLetter}
              >
                <img
                  src="/assets/icons/upload-icon.svg"
                  alt="upload cover letter"
                />
              </button>
            </div>
            <div className="application-form__field-wrapper">
              <label
                className="application-form__label"
                id="consent-radiogroup-label"
              >
                Declaration of consent
              </label>
              <fieldset
                aria-labelledby="consent-radiogroup-label"
                className="consent-fieldset"
              >
                <input
                  type="checkbox"
                  name="consent"
                  value="true"
                  id="consent-radio"
                  checked={state.consent === 'true'}
                  onChange={e =>
                    dispatch({
                      type: 'CHANGE_CONSENT',
                      payload: { value: e.target.checked },
                    })
                  }
                  required
                />
                <label htmlFor="consent-radio" className="consent-radio-label">
                  <span className="consent-description">
                    I agree to the&nbsp;
                    <a href="/privacy-policy" className="u-link">
                      <span onClick={e => e.stopPropagation()}>
                        privacy policy
                      </span>
                    </a>
                    &nbsp;of Digital Product Schhool and it's parent company
                    UnternehmerTUM GmbH. The data collected through his
                    application form will be deleted at least six months after
                    the beginning of the batch you applied for.
                  </span>
                </label>
              </fieldset>
            </div>
            <input type="hidden" name="track" value={`${props.track}`}></input>
            <button
              type="submit"
              className={`application-form__submit application-form__submit--${props.track} u-button`}
            >
              Send your application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
