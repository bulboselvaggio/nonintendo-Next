import React from 'react'

import PropTypes from 'prop-types'

const Branding = (props) => {
  return (
    <>
      <div className={`branding-branding ${props.rootClassName} `}>
        <img
          alt={props.logoAlt}
          src={props.logoSrc}
          className="branding-logo"
        />
      </div>
      <style jsx>
        {`
          .branding-branding {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .branding-logo {
            width: var(--dl-size-size-xlarge);
            height: auto;
            object-fit: cover;
          }

          @media (max-width: 767px) {
            .branding-logo {
              width: 15px;
              height: 15px;
            }
          }
          @media (max-width: 479px) {
            .branding-logo {
              width: var(--dl-size-size-xlarge);
              height: 100%;
            }
            .branding-root-class-name1 {
              width: var(--dl-size-size-xxlarge);
            }
          }
        `}
      </style>
    </>
  )
}

Branding.defaultProps = {
  logoAlt: 'image',
  rootClassName: '',
  logoSrc: '/nonintendo-200h.png',
}

Branding.propTypes = {
  logoAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  logoSrc: PropTypes.string,
}

export default Branding
