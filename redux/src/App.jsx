import { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux';
import './App.css'
import { decrease, increase } from '../redux/counter.js';

function App() {
  const [counter, setCount] = useState(0)
  const dispatch= useDispatch();
  const count=useSelector((state)=>state.counter.value);
  function newVal(e){
    setCount(Number(e.target.value));
  }

  return (
    <>
  <h1>{count}</h1><br></br>
  <input value={counter} onChange={(e)=>{newVal(e)}} placeholder='Enter Number!' type='number'/>
    <button onClick={() => dispatch(increase(counter))}>Increase</button>
      <button onClick={() => dispatch(decrease(counter))}>Decrease</button>
     </>
     
  )
}

export default App
