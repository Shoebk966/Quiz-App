import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../Stored/Context';
import {Data} from '../Stored/Data'
import { FaStar  , FaStarHalfAlt, FaRegThumbsDown } from 'react-icons/fa';
import useSound from 'use-sound';
import winsound from '../sound/win.mp3';
import lose from '../sound/gameloose.mp3';

const Result = () => {
  const [hello , setHello] = useState();
  const [wintitle , setWinTitle] = useState('')
  const [startsound] = useSound(winsound);
  const [lossinggame] = useSound(lose)

    const {setStartGame, score, setScore , name } = useGlobalContext();

    const restartgame = () =>{
        setStartGame('quiz')
        setScore(0)
        
    }


useEffect(()=>{
  if(score == 0){
    lossinggame()
  }else{
    startsound();
  }
  
}, [lossinggame , startsound])

    useEffect(()=>{

      if(score== 0){
        setHello(<FaRegThumbsDown />)
        setWinTitle('You loose !')
     
      }
        else if(score <= 3){
            setHello(<FaStarHalfAlt />) 
            setWinTitle('Congratulaions!')
           

        }else if(score <= 5){
              setHello(<FaStar /> )
              setWinTitle('Congratulaions!')
              

        }
    },[])
  return (
<>
<div className='outerdiv resdiv'>
<div className='quiz-result'>Quiz Result</div>
  <div className='gameicon'> {hello}</div>
  <div className='wintag'>{wintitle} {name}</div>  
<div className='scoretitle' >YOUR SCORE</div>
<div className='mainscore'> {score} <span className='totlengh'> / {Data.length}</span></div>
<button className='end-btn' onClick={restartgame} >Restart</button>
</div>
</>
  )
}

export default Result