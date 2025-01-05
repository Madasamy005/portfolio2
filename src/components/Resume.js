import ResumeImg from '../assets/resume.jpg'

export default function Resume(){
    
    return(
        <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5'>
            <div className='md:w-1/2 flex justify-center md:just'>
                <img className='py-5 px-5 w-[300px] ' src={ResumeImg}/>
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl  border-b-4 border-[slateblue] mb-5 w-[140px] font-bold'>Resume</h1>
                <p className='pb-5'>You can view My Resume <a target='_blank' className='btn' href="https://www.bing.com/ck/a?!&&p=f85880cf624051f5JmltdHM9MTcxMjc5MzYwMCZpZ3VpZD0zMTFjY2IxMy01Mzc5LTY2YTUtMTI5My1kZjI0NTIwMjY3ZDkmaW5zaWQ9NTIxOQ&ptn=3&ver=2&hsh=3&fclid=311ccb13-5379-66a5-1293-df24520267d9&psq=sample+pdf+file&u=a1aHR0cHM6Ly9zbWFsbHBkZi5jb20vYmxvZy9zYW1wbGUtcGRm&ntb=1">Download</a></p>
                
                </div>
            </div>
        </section>
    )
}