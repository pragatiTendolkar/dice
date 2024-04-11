import React from 'react'

const Diceroll = ({currentNum, Rolldice}) => {

  
   
    return (
        <div className="roll-box">
            <img className="dice-img" src={'./imgs/dice_' + currentNum + ".png"} alt="" onClick={() => Rolldice(1, 7)} />
            <p>Click on image to roll Dice</p>
        </div>
    )


}

export default Diceroll