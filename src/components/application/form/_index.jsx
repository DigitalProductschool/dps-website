import * as React from 'react';
import { useRef, useCallback, useReducer, useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { getFirebase } from '../../../firebase/firebase';

const _5MB = 5242880; // in bytes;

const initialState = {
  name: '', // string
  email: '', // string
  batch: '', // number as string, for instance '8', '9', etc
  source: '', // string, free text
  consent: '', // string, 'true' | 'false'
  scholarship: '', // string, 'true' | 'false'
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

function getBatchDate(batchDate) {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  let date = batchDate.toDate();
  let newdate =
    monthNames[date.getMonth()] +
    ' ' +
    date.getDate() +
    ', ' +
    date.getFullYear();
  return newdate;
}

function isApplicationPhaseOpen(applicationStartDate) {
  const today = new Date();
  let givenDate = applicationStartDate.toDate();
  return givenDate <= today;
}

export default function Form(props) {
  const SUBMIT_URL = process.env.GATSBY_HANDLE_APPLICATION_ENDPOINT;
  const fileInputCVRef = useRef(null);
  const uploadCVLabelRef = useRef(null);
  const fileInputCoverLetterRef = useRef(null);
  const formWrapperRef = useRef(null);
  const [response, setResponse] = useState();
  const [cvUploadError, setCVUploadError] = useState(null);
  const [coverLetterUploadError, setCoverLetterUploadError] = useState(null);
  const [isInflightRequest, setIsInflightRequest] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const clickFileInputCV = useCallback(() => {
    fileInputCVRef.current.click();
  }, []);

  const clickFileInputCoverLetter = useCallback(() => {
    fileInputCoverLetterRef.current.click();
  }, []);

  const [batchDetails, setBatchDetails] = useState([]);

  const submitForm = e => {
    e.preventDefault();

    if (!state.cv) {
      setCVUploadError(true);
      uploadCVLabelRef.current.scrollIntoView();
      return;
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
    formData.append('track', props.track);
    formData.append('coverLetter', state.coverLetter);
    formData.append('cv', state.cv);

    setIsInflightRequest(true);
    fetch(SUBMIT_URL, {
      method: 'POST',
      body: formData,
    })
      .then(res => {
        if (res.status >= 400) {
          setResponse('failure');
        } else {
          setResponse('success');
        }
      })
      .catch(() => {
        setResponse('failure');
      })
      .finally(() => {
        formWrapperRef.current.scrollIntoView();
        setIsInflightRequest(false);
      });
  };

  useEffect(() => {
    setCVUploadError(null);
    setCoverLetterUploadError(null);
  }, [state]);

  useEffect(() => {
    const firebaseApp = import('@firebase/app');
    const firebaseDatabase = import('@firebase/firestore');
    var currentTime = new Date();
    Promise.all([firebaseApp, firebaseDatabase]).then(([firebase]) => {
      const database = getFirebase(firebase).firestore();
      database
        .collection('batch-details')
        .where('appEndDate', '>', currentTime)
        .orderBy('appEndDate')
        .get()
        .then(snapshot => {
          let batchDetails = [];
          snapshot.forEach(
            doc =>
              (batchDetails = [
                ...batchDetails,
                {
                  batchID: doc.id,
                  batchNumber: doc.data().batch,
                  startDate: doc.data().startDate,
                  endDate: doc.data().endDate,
                  appStartDate: doc.data().appStartDate,
                  appEndDate: doc.data().appEndDate,
                },
              ])
          );

          setBatchDetails(batchDetails);
        });
    });
  }, []);

  let displayCurrentBatches = batchDetails.map(function(batch) {
    if (isApplicationPhaseOpen(batch.appStartDate)) {
      return (
        <option value={batch.batchNumber} key={batch.batchID}>
          {`Batch #${batch.batchNumber}: ${getBatchDate(
            batch.startDate
          )} to ${getBatchDate(batch.endDate)} `}
        </option>
      );
    }

    return '';
  });

  return (
    <div className="u-content-wrapper">
      <div className="application-form-content">
        <div className="application-form-plate" ref={formWrapperRef}>
          {response === 'success' && (
            <>
              <h4>
                <span role="img" aria-label="party emojis">
                  🎉🦄🎉
                </span>
                &nbsp;Thank you for applying at Digital Product School&nbsp;
                <span role="img" aria-label="party emojis">
                  🎉🦄🎉
                </span>
              </h4>
              <p>
                You'll receive a confirmation email and we'll get in touch soon.
                We give our best, but it may take up to 8 weeks.
              </p>
              <Link
                to="/"
                className="u-button"
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
          )}
          {response === 'failure' && (
            <p>
              Something went wrong on our end. We're sorry. Please contact us at
              hello@dpschool.io
            </p>
          )}
          {!response && (
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
                  {displayCurrentBatches}
                </select>
              </div>
              <div className="application-form__field-wrapper">
                <label
                  className="application-form__label"
                  htmlFor="file-upload"
                  ref={uploadCVLabelRef}
                  style={cvUploadError ? { color: 'red' } : null}
                >
                  Please upload your CV (PDF, max 5MB)
                  {cvUploadError && <p> {cvUploadError} </p>}
                </label>
                <label />
                <input
                  onChange={e => {
                    if (e.target.files[0] && e.target.files[0].size > _5MB) {
                      return setCVUploadError(
                        'File size should be less than 5MB'
                      );
                    }

                    dispatch({
                      type: 'CHANGE_CV',
                      payload: { file: e.target.files[0] },
                    });
                  }}
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
                  htmlFor="file-upload-cover-letter"
                  style={coverLetterUploadError ? { color: 'red' } : {}}
                >
                  Describe your motivation in a cover letter (Optional, PDF, max
                  5MB)
                  {coverLetterUploadError && <p> {coverLetterUploadError} </p>}
                </label>
                <input
                  className="application-form__input"
                  type="file"
                  accept="application/pdf"
                  ref={fileInputCoverLetterRef}
                  tabIndex={-1}
                  id="file-upload-cover-letter"
                  onChange={e => {
                    if (e.target.files[0] && e.target.files[0].size > _5MB) {
                      return setCoverLetterUploadError(
                        'File size should be less than 5MB'
                      );
                    }

                    dispatch({
                      type: 'CHANGE_COVER_LETTER',
                      payload: { file: e.target.files[0] },
                    });
                  }}
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
                  className={`application-form__label scholarship-radiogroup-label-${props.track}`}
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
                    className={`scholarship-1 scholarship-1-${props.track}`}
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
                    className={`scholarship-radio-label scholarship-radio-label-${props.track}`}
                  >
                    Yes, I need the scholarship.
                  </label>
                  <input
                    type="radio"
                    name="scholarship"
                    value="false"
                    id="scholarship-2"
                    className={`scholarship-2 scholarship-2-${props.track}`}
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
                    className={`scholarship-radio-label scholarship-radio-label-${props.track}`}
                  >
                    No, DPS can use the money to help fellow participants to
                    cover their living cost in Munich.
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

              <div
                className="application-form__field-wrapper"
                style={{ zIndex: 1 }}
              >
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
                    className={`consent-radio consent-radio-${props.track}`}
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
                  <label
                    htmlFor="consent-radio"
                    className={`consent-radio-label consent-radio-label-${props.track}`}
                  >
                    <span className="consent-description">
                      I agree to the&nbsp;
                      <a
                        href="/privacy-policy"
                        className="u-link"
                        target="_blank"
                      >
                        <span onClick={e => e.stopPropagation()}>
                          privacy policy
                        </span>
                      </a>
                      &nbsp;of Digital Product School and it's parent company
                      UnternehmerTUM GmbH. The data collected through his
                      application form will be deleted at least six months after
                      the beginning of the batch you applied for.
                    </span>
                  </label>
                </fieldset>
              </div>
              <button
                type="submit"
                className={`application-form__submit application-form__submit--${props.track} u-button`}
              >
                {isInflightRequest && 'SENDING...'}
                {!isInflightRequest && 'SEND YOUR APPLICATION'}
              </button>
              {isInflightRequest && <p> This may take a few seconds. </p>}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
