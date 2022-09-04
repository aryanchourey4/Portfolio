import React from 'react'
import '../styles/AboutMe.css'
import { Player } from '@lottiefiles/react-lottie-player';
import { useSelector } from 'react-redux'


export default function AboutMe() {
  const darkState = useSelector(state => state.darkmode.value);
  return (
    <>
      <div className={`aboutMe ${darkState ? "dark" : ""}`}>
        <div id="aboutMe-container">
          <h1>About Me</h1>
          <p>My name is Aryan Chourey.
            At present, I am a second-year student pursuing B.Tech in Computer Science and Engineering with a specialization in Big Data Analytics at the Netaji Subhas University of Technology.<br />
            I did my schooling at Bloom Public School, Vasant Kunj, New Delhi and scored 91% in 12th class.
            I have some proficiency in the German language, coding and playing the piano.
            My strong points are being diligent, attentive, positive and a good listener.
            My weak points include being an over-thinker and an introvert.<br />
            I love to play badminton and have recently developed an interest in coding.
            My aim in life is to have a successful career and lead a happy and meaningful life.
            My role model is Lee Chong Wei, a former Malaysian badminton player because he is a humble and diligent person who went on to hold the BWF rank 1 longer than any other player with his hard work making him one of the greatest badminton players of all time.
          </p>
        </div>
        <div id='aboutMe-lottie'>
          <Player
            autoplay={true}
            loop={true}
            controls={false}
            src="/lotties/7vzAhE6SPn.json"
            style={{ height: 'auto', width: '30vw' }}
          ></Player>
        </div>
      </div>
    </>
  )
}
