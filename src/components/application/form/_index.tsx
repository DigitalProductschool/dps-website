import * as React from 'react'
import { useRef, useCallback } from 'react'

export default function Form(props: { track: 'se' | 'pm' | 'ixd' | 'ai' }) {
  const fileInput = useRef(null)
  const clickFileInput = useCallback(() => {
    fileInput.current.click()
  }, [])

  return (
    <div className="u-content-wrapper">
      <div className="u-content application-form-content">
        <div className="application-form-plate">
          <form className="application-form">
            <div className="application-form__field-wrapper">
              <label className="application-form__label" htmlFor="name">
                {' '}
                What is your name name?{' '}
              </label>
              <input
                className="application-form__input"
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div className="application-form__field-wrapper">
              <label className="application-form__label" htmlFor="email">
                {' '}
                What is your email address?{' '}
              </label>
              <input
                className="application-form__input"
                type="email"
                id="email"
                name="email"
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
                name="describe-yourself"
              >
                <option value="none">Please select</option>
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
                name="batch-selection"
              >
                <option value="none">Please select</option>
                <option value="student">Batch#8</option>
                <option value="graduate">Batch#9</option>
              </select>
            </div>
            <div className="application-form__field-wrapper">
              <label className="application-form__label" htmlFor="file-upload">
                Please upload your CV (PDF, max 5MB)
              </label>
              <input
                className="application-form__input"
                type="file"
                ref={fileInput}
                tabIndex={-1}
                id="file-upload"
              />
              <div
                className="application-form__input application_form__file-input-overlay"
                onClick={clickFileInput}
              >
                Choose file
              </div>
              <button
                type="button"
                className={`application-form__file-button application-form__file-button--${
                  props.track
                }`}
                onClick={clickFileInput}
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
              >
                <input
                  type="radio"
                  name="scholarship"
                  value="yes"
                  id="scholarship-1"
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
                  value="yes"
                  id="scholarship-2"
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
          </form>
        </div>
      </div>
    </div>
  )
}
