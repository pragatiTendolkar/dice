import React from 'react';
import Select from './Select';
import Diceroll from './Diceroll';
import { useState } from 'react';



const Playgame = () => {

  const [select, setselect] = useState();
  const [currentNum, setcurrentNum] = useState(1);
  const [score, setscore] = useState(0);

const [Error, setError] = useState(" ");

  const Rolldice = (min, max) => {
   
    if (!select) {
      setError("Select your number first");
     return 
    }
    
  
   

    const RandomNumber = Math.floor(Math.random() * (max - min) + min);
    setcurrentNum(RandomNumber);


    


    if (RandomNumber == select) {

      setscore(RandomNumber + score);
      console.log(RandomNumber + "==" + select + "=" + RandomNumber);
      
    }
    else {
      setscore(score - 2);
      console.log(RandomNumber + " is not = " + select)
    }
    setselect();
  }

  const reset =() =>{

    console.log("reset");
    setselect();
    setcurrentNum(1);
    setscore(0);
    
  }


  return (
    <>
      <div className="box play-box">
        <div className="total-score">
          <h2> {score} </h2>
          <p>Total Score</p>
        </div>

        <div className="num-select">
          <Select select={select} setselect={setselect} setError={setError}  Error = {Error} />
        </div>

        <Diceroll currentNum={currentNum} Rolldice={Rolldice} />

        <button className='white-btn reset-btn' onClick={reset}>Reset Game</button>
   {/* <audio src="./sound/background.mp3" autoPlay loop />         */}
      </div>
    </>
  )
}

export default Playgame