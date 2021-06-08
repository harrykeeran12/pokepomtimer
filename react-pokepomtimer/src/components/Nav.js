import React, {useState } from 'react'
import SpotifyEmbed from './Spotify'
import SpotifyForm from './SpotifyForm'

function Nav(){
const [pressed, setpressed] = useState(false)
const [link, setlink] = useState('')

const embed = <div className="spotify-container">
  <SpotifyEmbed link={link}></SpotifyEmbed>
  </div>



const turnOnSpotify = () => {
  if(pressed === true){ 
    setpressed(!pressed)
     
    }
 else{
    setpressed(!pressed)
      
    }
}

function processLink(link) {
  if(link.includes("open.spotify.com")){
    link = link.replace("/playlist", "/embed/playlist")
    setlink(link)
  }

  
}

  return(
    <React.Fragment>
    <div className="nav-container">
      <i className="fab fa-spotify icon" onClick={turnOnSpotify}></i>
        {(pressed === true) ? <SpotifyForm setlink = {link => processLink(link)}></SpotifyForm> : <div></div>}
      </div>
      {((pressed === true) && (link !== '')) ? embed : <div></div>}
      </React.Fragment>
  )
}
export default Nav