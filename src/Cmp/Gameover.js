import React, { useEffect } from 'react'
import { useGlobalContext } from '../Stored/Context'
import useSound from 'use-sound';
import endgame from '../sound/gameover.mp3';

const Gameover = () => {
  const {setStartGame, score, setScore} = useGlobalContext()
  const [gameover] = useSound(endgame)

  const resestgame = () => {
    setScore(0);
    setStartGame('quiz');
  }
  useEffect(()=>{
gameover();
  },[gameover])




  return (
    <div className='mainover'>
    <div className='gmover'>Gameover</div>
    <br />

     <button className='end-btn' onClick={resestgame}>Restart Game</button>
    </div>
  )
}

export default Gameover