import React, { useState } from 'react'
import './App.css'
import { fetchData } from './FetchData'


const App = () => {

    const [text,setText] = useState('')
    
    const [data, setData] = useState()

    const [bool, setBool] = useState(true)

    const handleOnClick = async (e) => {
        if(!text){
            alert('enter the city name')
        }else{
            const res = await fetchData(text)
        setData(res.weather[0].main)
        setBool(false);
        setText('')
        console.log(data)
        }
    }

    return (
        <>
        
       <div className="contain">
           <div className="Container">
                {/* it is my card */}
               <div className="card">
                  <div className="Container">
                  <input type="text" className="input" value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter City Name'/>
                  <button onClick={handleOnClick}>Check Weather</button>
                  <h4>{bool && 'Double press for first time'}</h4>
                  <div>
                      <h1>{data}</h1>
                  </div>
                  </div>
               </div>
           </div>
       </div>
        </>
    )
}

export default App
