import React ,{useState} from 'react'
import axios from 'axios';

function Weather() {
    const [city, setCity]=  useState('')
    const [result, setResult] = useState([])

    const changeHandler =(e)=>{
        setCity(e.target.value)
    }
    const submitHandler =(e)=>{
        e.preventDefault()
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
        .then((res)=>{
            const kelvin = res.data.main.temp
            const celsius = Math.round(kelvin - 273.15);
            setResult(`Temperature at ${city} is \n ${celsius}°C`)
            setCity("");   
        })
        
    }
  return (
    <div className=' flex justify-center '>
        <div className='border-2 h-2/4 w-2/4  pb-48 pt-24 mt-4 text-center bg-cyan-300'>
            <form onSubmit={submitHandler}>
            <input type='text' name='city' className='border bg-gray-200 m-2 ' placeholder='Enter your City' value={city} onChange={changeHandler}/>
            <br></br>
            <input className='bg-blue-400 text-white font-bold m-1' value='Get Temperature' type='submit' ></input>
            </form>
            <div>
                <h1 className='text-3xl'>
                    {result}
                </h1>
            </div>
        </div>
    </div>
  )
}

export default Weather