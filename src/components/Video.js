import React from 'react'
import './components.css'

function Video() {
  return (
    <>
    <center><h1 className="titulovideo">Destacado</h1></center>
    <div className="videoContainer">
          <center>
              <iframe className='videoContent'
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/9ruBLEEqw_c"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen>
              </iframe>
          </center>
      </div>
    </>
  )
}

export default Video