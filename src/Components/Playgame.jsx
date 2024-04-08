import React from 'react';
import Select from './Select';
import Diceroll from './Diceroll';
import { useState } from 'react';


const Playgame = () => {

  const [select, setselect] = useState();
  const [currentNum, setcurrentNum] = useState(1);

  return (
    <>
      <div className="box play-box">
        <div className="total-score">
          <h2>0</h2>
           <p>Total Score</p>
        </div>

        <div className="num-select">
          <Select select = {select} setselect = {setselect} />
        </div>

        <Diceroll currentNum = {currentNum}  setcurrentNum = {setcurrentNum}  />
      </div>
    </>
  )
}

export default Playgame