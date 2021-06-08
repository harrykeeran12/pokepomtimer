import React, { useState } from 'react'


function SpotifyForm({setlink}){
  const [Temp, setTemp] = useState('')

  const handleInput = event => {
  if (event.target.value !== ''){
  setTemp(event.target.value)
  
 }
  };
const submitHandler = event => {
  event.preventDefault()
  if(Temp !== ' '){
   setlink(Temp);
   setTemp(' ')
  } 
}
  return(
    <form className="spotify-form">
      <input type="text" placeholder="Enter the URL of a Spotify Link here." onChange={handleInput}className = "spotify-form-text"></input>
      <input type="submit" value="Submit" onClick={submitHandler}></input>
    </form>
  )
}

export default SpotifyForm