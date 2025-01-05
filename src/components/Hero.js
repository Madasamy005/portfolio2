import HeroImg from '../assets/hero.png'
import { AiOutlineInstagram,AiOutlineFacebook,AiOutlineLinkedin,AiOutlineGithub } from "react-icons/ai";

export default function Hero(){
    const config ={
        subtitle:"Im a Front End Developer ",
        social:
            {
                github:"https://github.com/Madasamy005",
                instagram:"https://WWW.instagram.com/m_a_d_d_y__mahesh",
                Linkedin:"https://WWW.linkedin.com/in/madasamy-p-a6b306248",
            }

        
       
    }
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2'>
        <h1 className=' text-white text-6xl font-hero-font'>Hi , <br />I'm Madasamy 
            <p className='text-2xl'>{config.subtitle}</p>
        </h1>
        <div className='flex py-5'>
           
            <a target='_blank' href= {config.social.Linkedin}className='pr-3 hover:text-white'><AiOutlineLinkedin size={40}/></a>
            <a target='_blank' href={config.social.github} className='pr-3 hover:text-white'><AiOutlineGithub size={40}/></a>
            <a target='_blank' href={config.social.instagram}  className='pr-3 hover:text-white'><AiOutlineInstagram size={40} /></a>
            <a href="#"  className=' hover:text-white'><AiOutlineFacebook size={40}/></a>
        </div>
        </div>

        <img className='md:w-1/3' src={HeroImg} />
    </section>
} 