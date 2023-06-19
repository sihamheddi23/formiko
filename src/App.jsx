import { useState } from "react"
import "./App.css"
import Choose from "./components/Choose"
function App() {
    
  const [step, setstep] = useState(-1)
   


  return (

      <div className="select">
          <select className="answer" value={step} onChange={(e)=>setstep(e.target.value)}>

             <option value="-1">
                 Hello message
             </option>

             <option value="0">
                useformik
             </option>
              
              <option value="1">
                formik tag
              </option>

              <option value="2">
                 validation with YUP 
              </option>

          </select>
        <Choose step={step}/>
      </div>
  )
}

export default App
