import React from 'react'

import PropTypes from 'prop-types'

const ContactForm1 = (props) => {
  return (
    <>
      <div className="contact-form1-contact1 thq-section-padding">
        <div className="contact-form1-max-width thq-section-max-width">
          <div className="contact-form1-container">
            <div className="contact-form1-section-title thq-card">
              <span className="thq-body-small">{props.content2}</span>
              <h2 className="thq-heading-2">{props.heading1}</h2>
              <span className="thq-body-small">{props.content1}</span>
            </div>
            <form className="thq-card">
              <div className="contact-form1-container1">
                <div className="contact-form1-input thq-flex-row">
                  <label
                    htmlFor="contact-form-1-name"
                    className="thq-body-small"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="contact-form-1-name"
                    placeholder="Name"
                    className="contact-form1-text-input thq-input"
                  />
                </div>
                <div className="contact-form1-input1 thq-flex-row">
                  <label
                    htmlFor="contact-form-1-email"
                    className="thq-body-small"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-form-1-email"
                    required="true"
                    placeholder="Email"
                    className="contact-form1-text-input1 thq-input"
                  />
                </div>
              </div>
              <div className="contact-form1-checkbox thq-flex-row">
                <input
                  type="checkbox"
                  id="contact-form-1-check"
                  checked="true"
                  required="true"
                  className="thq-checkbox"
                />
                <label
                  htmlFor="contact-form-1-check"
                  className="thq-body-small"
                >
                  I accept the Terms
                </label>
              </div>
              <button
                type="submit"
                className="contact-form1-button thq-button-filled"
              >
                <span className="thq-body-small">{props.action}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact-form1-contact1 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .contact-form1-max-width {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form1-container {
            display: flex;
            align-items: stretch;
            flex-direction: column;
          }
          .contact-form1-section-title {
            align-self: flex-start;
          }
          .contact-form1-container1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .contact-form1-input {
            width: 100%;
            align-self: flex-start;
            justify-content: space-between;
          }
          .contact-form1-text-input {
            flex: 1;
          }
          .contact-form1-input1 {
            width: 100%;
            align-self: flex-start;
            justify-content: space-between;
          }
          .contact-form1-text-input1 {
            flex: 1;
          }
          .contact-form1-checkbox {
            align-self: flex-start;
          }
          .contact-form1-button {
            align-self: flex-start;
          }
          @media (max-width: 991px) {
            .contact-form1-input {
              align-items: center;
              flex-direction: row;
            }
            .contact-form1-input1 {
              align-items: center;
              flex-direction: row;
            }
            .contact-form1-checkbox {
              width: 100%;
              align-items: center;
              flex-direction: row;
            }
          }
        `}
      </style>
    </>
  )
}

ContactForm1.defaultProps = {
  action: 'Submit',
  content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  heading1: 'Contact us',
  content2: 'Get in touch with us today!',
}

ContactForm1.propTypes = {
  action: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
  content2: PropTypes.string,
}

export default ContactForm1
