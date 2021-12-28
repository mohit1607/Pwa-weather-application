import React, { useEffect, useState } from 'react'
import './App.css'
import { fetchData } from './FetchData'


const App = () => {

    const [text,setText] = useState('')
    
    const [data, setData] = useState()
    const [city, setCity] = useState('Enter the city Name')
    const [temp, setTemp] = useState()

    const handleOnClick = async (e) => {
        if(!text){
            alert('enter the city name')
        }else{
            try{
                const res = await fetchData(text.toLowerCase()).catch((e) => {
                    setData('Invalid cityName')
                    setTemp('')
                    setCity('')
                })
            setData(res.weather[0].main)
            setCity(res.name)
            setTemp(res.main.temp)
            setText('')
            // console.log(res.main.temp)
            }catch(e){
                console.log(e)
            }
        }
    }

    useEffect(() => {
       
    }, [])

    return (
        <>
        
       <div className="contain">
           <div className="Container">
                {/* it is my card */}
               <div className="card">
                  <div className="Container">
                  <input type="text" className="input" value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter City Name'/>
                  <button onClick={handleOnClick}>Check Weather</button>
                  <div>
                      <h1>{data}</h1>
                      <div className="temp">
                      <span>{temp}</span>
                      {temp && <sup>&deg;C</sup>}
                      </div>
                      <h3><span>{city}</span>
                      </h3>
                  </div>
                  </div>
               </div>
           </div>
       </div>
        </>
    )
}

export default App
