import React, { useState } from 'react'
import {useGlobalContext} from '../Stored/Context';

const Playgame = () => {

    const {setStartGame , name , setName} = useGlobalContext();

    const Getname = (e) => {
      e.preventDefault();
      
      console.log(name)
      if(!name){
        alert('enter your name')
      }else{
        setStartGame('quiz')
      }


    }

  return (


    <div>

 <div className='indvi'>   <input placeholder='enter your name to start' className='inp' type='text' value={name} onChange={(e)=> setName(e.target.value)} /></div>
    
        <button className='playbtn' onClick={Getname}>Start Game</button>
    </div>
  )
}

export default Playgame