import React from 'react'

const Startgame = ({ toggle }) => {
  console.log(toggle);
  return (
    <>
      <div className="box">
        <div className="row start-row">
          <div className="col col-1">
            <img src="./imgs/dice.png" alt="" />
          </div>
          <div className="col col-2">
            <h1>Start Game</h1>
            <button className='black-btn' onClick={toggle}>Play Game</button>
          </div>
        </div>  
      </div>
    </>
  )
}

export default Startgame
