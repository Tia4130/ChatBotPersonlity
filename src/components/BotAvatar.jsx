import React from 'react'

//CSS
import './BotAvatar.css';

//IMAGES
import AvatarBot from '../image/AvatarBot.jpeg';

function BotAvatar() {
  return (
    <div className='bot-avatar'>
        <img src={AvatarBot} alt="Tibouperfume"/>
    </div>
  )
}

export default BotAvatar