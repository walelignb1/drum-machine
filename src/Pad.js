import React,{useEffect, useState} from 'react'

const Pad = ({clip, volume}) => {

    const [activeKey, setActiveKey] = useState(false)

    useEffect (() => {
        document.addEventListener('keydown', handelKey);
        return () =>{
            document.removeEventListener('keydown', handelKey)
        }
    },[])

    function handelKey(e){
        if(e.keyCode === clip.keyCode){
            playSound()
        }
    }

    function playSound() {
        const audio = document.getElementById(clip.text);
        setActiveKey(true)
        setTimeout(() => setActiveKey(false), 200)
        audio.volume = volume
        audio.currentTime = 0
        audio.play();
    }

  return (
    <div>
        <div className={`drum-pad ${activeKey && 'inner'}`} onClick={playSound}>{clip.text}
            <audio className="clip" id={clip.text} src={clip.src}>{clip.text}</audio>
        </div>             
    </div>
  )
}

export default Pad
