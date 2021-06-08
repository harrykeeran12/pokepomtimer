import React from 'react';

import '../index.css'

function SpotifyEmbed({ link }){
  
  return(
    <iframe src={link} frameborder="0" allowtransparency="true" allow="encrypted-media" title="Spotify" className="spotify-embed"></iframe>
  )


}

export default SpotifyEmbed;


