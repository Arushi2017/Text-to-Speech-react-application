import React, { useState } from 'react'

const Textspeech = () => {
    const [text, setTest] = useState("");
    const [speaking , setSpeaking] = useState(false);


    const handleInputChange = (e) => {
        setTest(e.target.value);
    }

    const handlespeak=() => {
       if (speaking) {
         window.speechSynthesis.cancel();
         setSpeaking(false);
       }else{
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance)
        setSpeaking(true)
       }
    }

  return (
    <div>
      <textarea className='textarea' 
      value={text}
      onChange={handleInputChange}
      placeholder='enter you text here '/>


      <div className='button-container'>
        <button className='button' onClick={handlespeak}>{speaking?"stop speaking" : "start speaking"}</button>
      </div>
    </div>
  )
}

export default Textspeech
