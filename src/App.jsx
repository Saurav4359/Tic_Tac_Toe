import { useState } from "react";
import "./App.css";

const Square = ({value,onSquareClick}) => {

   
  return <button className="sqaure" onClick={onSquareClick}>{value}</button>;
};

function App() {
  const [square ,setsquare]=useState(Array(9).fill(null));
  const handleClick=(i)=>{
     const nextSq=square.slice();
     nextSq[i]='X';
     setsquare(nextSq);
  }
  return (
    <>
      <div className="row">
        <Square value={square[0]} onSquareClick={()=>handleClick(0)}/>
        <Square value={square[1]} onSquareClick={()=>handleClick(1)}/>
        <Square value={square[2]} onSquareClick={()=>handleClick(2)}/>
      </div>
      <div className="row">
        <Square value={square[3]} onSquareClick={()=>handleClick(3)}/>
        <Square value={square[4]} onSquareClick={()=>handleClick(4)}/>
        <Square value={square[5]} onSquareClick={()=>handleClick(5)}/>
      </div>
      <div className="row">
        <Square value={square[6]} onSquareClick={()=>handleClick(6)}/>
        <Square value={square[7]} onSquareClick={()=>handleClick(7)}/>
        <Square value={square[8]} onSquareClick={()=>handleClick(8)}/>
      </div>
    </>
  );
}

export default App;
