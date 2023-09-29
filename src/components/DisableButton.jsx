import { useState } from "react"

const DisableButton = () => {
    const[value,setValue] = useState("")

    const handleChange = (e) => {
        setValue(e.target.value)
    }
  return (
    <div className="disabled-button">
        <h1>Disabled Button</h1>
        <input type="text" onChange={handleChange} />
        <button disabled={!value}>Submit</button>
    </div>
  )
}
export default DisableButton