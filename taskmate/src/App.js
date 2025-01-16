import "./App.css";
import { useState } from "react";
import { Header } from "./components/Header";
import { Tasklist } from "./components/Tasklist";

export default function App() {


  
  const [count,setCount] = useState(0);


  const handleAdd = () => setCount(count+1);
  const handleSub = () => setCount(count-1);
  const handleReset = () => setCount(0);

  return (
    <>
    <Header />
    <div>
    <p>{count}</p>
    <button onClick={handleAdd}>ADD</button>
    <button onClick={handleSub}>SUB</button>
    <button onClick={handleReset}>RESET</button>
    </div>
    <Tasklist item = "123" item2 ="456"/>
    </>
  )
}

