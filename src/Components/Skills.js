import React from 'react'
import '../styles/Skills.css'
import { Player } from '@lottiefiles/react-lottie-player';
import { useSelector } from 'react-redux'


export default function Skills() {
  const darkState = useSelector(state=>state.darkmode.value);
  return (
    <>
      <div className={`skills ${darkState?"dark":""}`}>
        <div id="skills-container">
          <h1>Skills</h1>
          <div className="progressWrap">
            <div className='progress-name'>Python</div>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: "60%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className='progress-name'>C++</div>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: "80%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className='progress-name'>C</div>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className='progress-name'>HTML</div>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: "70%" }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className='progress-name'>CSS</div>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: "55%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className='progress-name'>Node JS</div>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: "40%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className='progress-name'>MySQL</div>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: "45%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
        <div className="playerLottie">
          <Player
            autoplay={true}
            loop={true}
            controls={false}
            src="/lotties/skills.json"
            style={{ height: 'auto', width: '30vw' }}
          ></Player>
        </div>
      </div>
    </>
  )
}
