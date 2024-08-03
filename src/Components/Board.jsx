import React from 'react'
import { Box } from './Box';
import "./Board.css"
export const Board = ({board,onClick}) => {
  return (
    <div className='board'>
        {
            board.map((item,idx)=>{
                return <Box value={item} onClick={()=>item===null&&onClick(idx)}/>
            })
        }
    </div>
  )
}
