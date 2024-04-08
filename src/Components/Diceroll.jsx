import React from 'react'
import { useState } from 'react'

const Diceroll = ({currentNum, setcurrentNum}) => {

  
    const Rolldice = (min, max) => {

        const RandomNumber = Math.floor(Math.random() * (max - min) + min);
        setcurrentNum(RandomNumber);
        console.log(RandomNumber);

    }
    return (
        <div className="roll-box">
            <img className="dice-img" src={'./imgs/dice_' + currentNum + ".png"} alt="" onClick={() => Rolldice(1, 7)} />
            <p>Click on image to roll Dice</p>
        </div>
    )

}

export default Diceroll