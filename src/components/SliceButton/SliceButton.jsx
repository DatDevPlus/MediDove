import React from 'react';
import './SliceButton.scss';

const SliceButton = (props) => {

    const { content, color } = props;

  return (
    <div className="slice-button custom-button">
        <a href="/" className={`button__rounded button--${color}`}>
            <span className="plus-icon">+</span>
            {content}
        </a>
    </div>
  )
}

export default SliceButton
