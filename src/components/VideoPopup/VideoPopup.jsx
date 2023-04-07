import React from 'react'
import './VideoPopup.scss'

const VideoPopup = (props) => {
  return (
        <div className="mfp-bg" onClick={props.hideVideo}>
          <div className="video__display">
            <div>
              <button
                className="mfp-close"
                title="Close (Esc)"
                type="button"
                onClick={props.hideVideo}
              >
                X
              </button>
              <iframe
                height="452px"
                src="//www.youtube.com/embed/oU_GUAWz52w?autoplay=1"
                style={{
                  visibility: props.display ? "visible" : "hidden",
                }}
                width="804px"
              ></iframe>
            </div>
          </div>
        </div>
  )
}

export default VideoPopup