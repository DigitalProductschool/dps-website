import * as React from 'react'

export default function Form(props: { track: 'se' | 'pm' | 'ixd' | 'ai' }) {
  return (
    <div className="u-content-wrapper">
      <div className="u-content application-form-content">
        <div className="application-form-plate">
          <form className="application-form">
            Form bro <br />
            What's your name? <br />
            <input type="text" />
          </form>
        </div>
      </div>
    </div>
  )
}
