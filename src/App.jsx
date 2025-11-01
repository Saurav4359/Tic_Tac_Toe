import { useState } from 'react'
import './App.css'


const Square = ({player})=>{
  return(
    <button className="sqaure">{player}</button>
  );
}
function App() {
  return(<>
    <div className="row">
  <Square player={'X'}/>
  <Square player={'X'}/>
  <Square player={'X'}/>
    </div>
      <div className="row">
  <Square player={'X'}/>
  <Square player={'X'}/>
  <Square player={'X'}/>
    </div>
      <div className="row">
  <Square player={'X'}/>
  <Square player={'X'}/>
  <Square player={'X'}/>
    </div>


     
  </>);
}

export default App
