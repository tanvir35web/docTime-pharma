import React from 'react'
import world from '../assets/images/world.png'
import bottomArrow from "../assets/images/container.png"

const Language = () => {
  return (
    <div className='flex flex-row gap-2 items-center text-docTime-blue'>
        <img className='w-4 h-4' src={world} alt="world Icon" />
        <p>EN</p>
        <img  src={bottomArrow} alt="bottom arrow icon" />
    </div>
  )
}

export default Language;