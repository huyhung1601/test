import React, {useState, useRef, useEffect} from 'react'
import one from '../asset/one.mp3'
import two from '../asset/two.mp3'


const audioFiles = [ one, two]
export default function Audio() {


    const audioFiles= [one,two]
    const [index, setIndex] = useState(0);
    const audioRef = useRef();

    useEffect(() => {
      audioRef.current.src = audioFiles[index]      
    },)

    const handleNext = ()=>{
      if(index===audioFiles.length - 1){
        setIndex(0);
      }else{
        setIndex(index+1);
      }
    }
    const handlePrev = ()=>{
      if(index===0){
        setIndex(audioFiles.length - 1);
      }else{
        setIndex(index-1);
      }
    }
  
      return <div>
  
        <audio controls ref={audioRef}  />
        <button onClick={handlePrev}>prev</button>
        <button onClick={handleNext}>next</button>
    </div>;
  }

      // function importAll(r) {
    //     let files= {};
    //     r.keys().map((item, index) => { files[item.replace('./', '')] = r(item); });
    //     return files;
    //   }      
    // const files= importAll(require.context('./images', false, /\.(mp3)$/));