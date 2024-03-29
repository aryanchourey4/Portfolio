import React, { useState } from 'react'
import '../styles/Contact.css'
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import { Player } from '@lottiefiles/react-lottie-player';
import { useSelector } from 'react-redux'


const notyf = new Notyf({
  types: [
    {
      type: 'info',
      background: 'yellow',
      icon: false
    }
  ]
});


export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })


  const submitQuery = (e) => {
    e.preventDefault();
    let myNotif = notyf.success({
      message: 'Submitting...',
      icon: false,
      duration: 20000
    });
    fetch("https://aryanchoureybackend.onrender.com/submit-query", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message
      })
    }).then((res) => (res.json())).then((res) => {
      notyf.dismiss(myNotif)
      if (res.error == null) {
        notyf.success("Submitted")
        setFormData({
          name: "",
          email: "",
          message: ""
        })
      } else {
        if(res.error==="Invalid")
            notyf.error("Invalid Email")
          else
            notyf.error("Failed");
      }
    }).catch((error) => {
      notyf.error("Failed");
    });
  }

  const darkState = useSelector(state => state.darkmode.value);

  return (
    <>
      <div className={`contact-container ${darkState ? "dark" : ""}`}>
        <div className="heading-box" id="mail-box">
          <h1 className='ContactHeading'>Drop a Mail ;)</h1>
          <div className='mail-anim'>
            <Player
              autoplay={true}
              loop={true}
              controls={false}
              src="/lotties/J0rWnUXhzS.json"
              style={{ height: '80px', width: '80px' }}
            ></Player>
          </div>
        </div>
        <form className='form-boxes'>
          <label className='form-labels' htmlFor="text">Name: </label>
          <input className='text-box' type={"text"} placeholder={"Enter your name"} value={formData.name} onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }} required />
          <label className='form-labels' htmlFor="email">E-mail: </label>
          <input className='text-box' type={"email"} placeholder={"Enter your E-mail ID"} value={formData.email} onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} required />
          <label className='form-labels' htmlFor="message">Message: </label>
          <textarea className='text-box' name="message" rows={7} placeholder={"Enter your message here"} value={formData.message} onChange={(e) => { setFormData({ ...formData, message: e.target.value }) }} required />
          <button className='submitButton' onClick={submitQuery} type={"submit"}>
            Submit
          </button>
        </form>
      </div>
    </>
  )
}
