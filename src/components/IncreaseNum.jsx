import { useState } from "react"

const IncreaseNum = () => {
    const[num,setNum] = useState(0)

    const increase = () => {
        setNum( num + 1)
    }
  return (
    <div className="increase">
        <h1>Increase Number</h1>
        <h2>{num}</h2>
        <button onClick={increase}>Increase</button>
    </div>
  )
}
export default IncreaseNum