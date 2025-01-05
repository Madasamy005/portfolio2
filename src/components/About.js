import AboutImg from '../assets/about1.png'

export default function About(){
    const config={
        line1:"Hello!,I'M Madasamy, a passionate a front-end developer dedicated to crafting user-friendly and visually stunning websites",
        line2:"I specialize in HTML,CSS,and JavaScript,with proficiency in frameworks like React",
        line3:"My goal is to continue pushing in web development"
    }
    return(
        <section id='about' className='flex flex-col md:flex-row bg-secondary px-5' >
            <div className='md:w-1/2'>
                <img src={AboutImg}/>
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl  border-b-4 border-[slateblue] mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p > {config.line3}</p>

                </div>
            </div>
        </section>
    )
}