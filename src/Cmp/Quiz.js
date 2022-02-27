import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../Stored/Context';
import { Data } from '../Stored/Data';
import { FaRegClock } from 'react-icons/fa';
import Result from '../Cmp/Result'


const Quiz = (prop) => {

  const { score, setScore, startGame, setStartGame , name} = useGlobalContext();

  const [QsData, setQsData] = useState(0);
  const [chooseAns, setChooseAns] = useState('');
  const [time, setTime] = useState(15)
  const [questions, setquestion] = useState(null)
  const [clr, setClr] = useState('')
  const [select, setSelect] = useState(null)
  const [btnclass, setBtnCLass] = useState('')
  const [right, setRight] = useState()
  // const [asnarray , setAnsarray] = useState(1)

  useEffect(() => {

    const timer = time > 0 && setInterval(() => {
      setTime((prev) => prev - 1)
    }, 1000);
    if(time <= 0){
      setStartGame('gameover')
   }
    return () => clearInterval(timer)
    
  }, [time])

  useEffect(() => {
    setTime(15)
  }, [QsData])

  useEffect(() => {
    setquestion(Data[QsData])
  }, [Data, QsData])


  const handleclick = (e) => {

    setSelect(e)
    setClr(e.correct ? 'green my-btn' : 'red my-btn')
    setBtnCLass('disable')
    console.log(e)
 

// console.log(a)

    if (!e.correct) {
      console.log('wrong answer selected');
    
    }
  }

// let a = Data[QsData].answers?.[QsData].correct;

  const nextqs = () => {
    if(!select){
      alert('Please choose any option')
    }
    setSelect(select.correct ? setScore(score + 1) : '')
    setQsData(QsData + 1)
    setBtnCLass('')

  }
  const finish = () => {
    setSelect(select.correct ? setScore(score + 1) : '')
    setStartGame('result')
  }
  return (
    <div>
      <div className='outerdiv'>
        <div className='timezone'> <span className="timedesing"> <span className='maintime'> {time} </span> <span className='timeicon'> <FaRegClock /> </span></span></div>
        <div className='qno'>{questions?.Qno} <span className='qslash'>  / {Data.length}</span></div>

        <h1 className='real-question'>{questions?.question}</h1>

        <h1></h1>


        {
          questions?.answers.map((e, id) => {
            return (
              <div className={btnclass} key={id}>
                <button className={select == e ? clr : 'my-btn'} onClick={() => handleclick(e)}>{e.text}</button>
              </div>
            )
          }
          )
        }
        <br />

        {QsData == Data.length - 1 ? <button onClick={finish}  className='end-btn' >Finish</button> : <button className='end-btn' onClick={nextqs} >Next</button>

        }

      </div>
    </div>
  )
}

export default Quiz