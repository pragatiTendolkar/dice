import React from 'react';
import Select from './Select';
import Diceroll from './Diceroll';
import { useState } from 'react';


const Playgame = () => {

  const [select, setselect] = useState();
  const [currentNum, setcurrentNum] = useState(1);
  const [score, setscore] = useState(0);



  const Rolldice = (min, max) => {

    if (!select) {
      return
    }
    const RandomNumber = Math.floor(Math.random() * (max - min) + min);
    setcurrentNum(RandomNumber);




    if (RandomNumber == select) {

      setscore(RandomNumber + score);
      console.log(RandomNumber + "==" + select + "=" + RandomNumber)
    }
    else {
      setscore(score - 2);
      console.log(RandomNumber + " is not = " + select)
    }
    setselect();
  }


  // console.log("select" , select);
  // console.log("currentNum" , currentNum);


  return (
    <>
      <div className="box play-box">
        <div className="total-score">
          <h2> {score} </h2>
          <p>Total Score</p>
        </div>

        <div className="num-select">
          <Select select={select} setselect={setselect} />
        </div>

        <Diceroll currentNum={currentNum} Rolldice={Rolldice} />
      </div>
    </>
  )
}

export default Playgame