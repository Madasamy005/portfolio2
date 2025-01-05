import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header(){

    const [toggleMenu ,setToggleMenu]=useState(false);
    return <header className="flex justify-between px-5 py-2 bg-color">
        <a className="font-bold text-white" href="#">Madasamy</a>
        <nav className=" hidden md:block">
        <ul className="flex text-white" >
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contacts</a></li>
        </ul>
        </nav>
        { toggleMenu && <nav className="block md:hidden ">
        <ul onClick={()=>setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav" >
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contacts</a></li>
        </ul>
        </nav>}
        <button onClick={()=> setToggleMenu(!toggleMenu)} className=' block md:hidden '>
             <Bars3Icon  className='h-5  text-white' />
        </button>
    </header>
}