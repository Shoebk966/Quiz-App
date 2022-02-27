import './App.css';
import { useState } from 'react';
import {useGlobalContext} from './Stored/Context';
import Quiz from './Cmp/Quiz';
import Result from './Cmp/Result';
import Playgame from './Cmp/Playgame';
import Gameover from './Cmp/Gameover';

function App() {

const {startGame} = useGlobalContext();

return(
  <>
  <div className='Appparent'>
  <div className='Appcard'>
  
<section class="sticky">
  <div class="bubbles">
      <div class="bubble"></div>
    <div class="bubble clr9"></div>
    <div class="bubble clr8"></div>
    <div class="bubble clr7"></div>
    <div class="bubble clr6"></div>
    <div class="bubble clr5"></div>
    <div class="bubble clr4"></div>
    <div class="bubble clr3"></div>
    <div class="bubble clr2"></div>
    <div class="bubble clr1"></div>
    
  </div>
</section>
{startGame == 'startgame' && <Playgame />}
  {startGame == 'quiz' && <Quiz  />}
    {startGame == 'result' && <Result />}
    {startGame == 'gameover' && <Gameover />}
    </div>
    </div>

  </>
)
}

export default App;
