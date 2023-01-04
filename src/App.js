import React, { useState } from "react";
import {FaFreeCodeCamp}from "react-icons/fa"
import "./App.css"
import Pad from "./Pad";

const audioClip = [
  {
    keyCode: 81,
    text: "Q",
    id: "Heater-1",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    text: "W",
    id: "Heater-2",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 69,
    text: "E",
    id: "Heater-3",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    text: "A",
    id: "Heater-4",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    text: "S",
    id: "Clap",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    text: "D",
    id: "Open-HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    text: "Z",
    id: "Kick-n'-Hat",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    text: "X",
    id: "Kick",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    text: "C",
    id: "Closed-HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];


const App = () => {
    
    const [volume, setVolume] = useState(1)
  
  return (
    <div>
      <div className="inner-container" id="drum-machine">
          <div className="pad-bank">
              {audioClip.map((clip)=>{
                return <Pad key={clip.id} 
                            clip={clip} 
                            volume={volume}
                            />
              })}
          </div>
        <div className="logo">
          <div className="inner-logo ">FCC&nbsp;<FaFreeCodeCamp fontSize={28}/></div>
        </div>
        <div className="controls-container">
          <div className="control">
            <p>Power</p>
            <div className="select">
              <div className="inner" Style="float: right;"></div>
            </div>
          </div>
            <p id="display">Closed HH</p>
            <div className="volume-slider">
              <input 
                max="1" 
                min="0" 
                step="0.01" 
                type="range" 
                onChange={(e) =>setVolume(e.target.value)}
                value={volume} />
            </div>
            <div className="control">
              <p>Bank</p>
              <div className="select">
                <div className="inner" Style="float: left;"></div>
              </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default App
