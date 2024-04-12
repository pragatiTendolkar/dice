import React from 'react'


const Startgame = ({ toggle }) => {

  // const [audio] = useState(new Audio("./sound/button.mp3"));

  // const playAudio = () => {
  //   audio.play();
  // };

  return (
    <>
      <div className="box">
        <div className="row start-row">
          <div className="col col-1">
            <img src="./imgs/dice.png" alt="" />
          </div>
          <div className="col col-2">
            <h1>Dice Game</h1>
            <button className='black-btn' onClick={toggle}>Play Game</button>
            {/* <audio src="./sound/background.mp3" autoPlay loop />   */}
          </div>
        </div>  
      </div>
    </>
  )
}

export default Startgame
