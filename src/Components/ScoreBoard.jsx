import React from 'react'
import "./ScoreBoard.css"
export const ScoreBoard = ({draw,winner,scores,xPlaying}) => {
    
  return (<>
    <div className='scoreboard'>
    <span className={`score x-score ${!xPlaying && "inactive"}`}>X-Score:{scores.xScore} </span>
    <span className={`score o-score ${xPlaying && "inactive"}`}>O-Score:{scores.oScore}</span>
    </div>
    {winner==="No"?
        <div></div>:
        <div className="winner">
        winner Is :<span className={`${winner}`}>{winner}</span> 
      </div>
    }
    {
        draw===true && <div className='winner'>Game Draw!</div>
    }
   
  </>
  )
}
