import React from 'react';
import { useState } from 'react';
import './App.css';
import { Board } from './Components/Board';
import { ScoreBoard } from './Components/ScoreBoard';
import { Reset } from './Components/Reset';

function App() {

  const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  const [board,setBoard]=useState(Array(9).fill(null));
  const [xPlaying,setXPlaying]=useState(true);
  const [scores,setScores]=useState({xScore:0,oScore:0});
  const [gameOver,setGameOver]=useState(false);
  const [first,SetFirst]=useState("No");
  const [draw,setDraw]=useState(false);

  const handleClick=(ind)=>{
      const newBoard=board.map((value,id)=>{
        if(ind===id)
          return xPlaying===true?"X":"O";
        else
          return value;
      })
      const winner=returnWinner(newBoard);
      if(winner){
        SetFirst(winner);
        if(winner==="X"){
          setScores(prevScore=>({
            ...prevScore,
            xScore:prevScore.xScore+1}
          ))
        }
        else{
          setScores(prevScore=>({
            ...prevScore,
            oScore:prevScore.oScore+1
          }))
        } 
      }


      setBoard(newBoard);
      setXPlaying(!xPlaying);
  }
  const returnWinner=(board)=>{
    for(let i=0;i<win.length;i++){
      const [x,y,z]=win[i];
      if(board[x] && board[x]===board[y] && board[y]===board[z]){
        setGameOver(true);
        return board[x];
      }
    }
    let cnt=0;
    for(let i=0;i<board.length;i++){
      if(board[i]!==null) cnt++;
    }
    if(cnt===9) setDraw(true);
  }
  const resetBoard=()=>{
    setDraw(false);
    SetFirst("No");
    setGameOver(false);
    setBoard(Array(9).fill(null));
  }
  return (<>
    <ScoreBoard draw={draw} winner={first} scores={scores} xPlaying={xPlaying}/>
    <Board board={board} onClick={gameOver?resetBoard: handleClick}/>
    <Reset resetBoard={resetBoard}/>
    </>
  );
}

export default App;
