import WebsiteImg from "../assets/websiteimg .png"
import Website1Img from "../assets/websiteimg1.png"
import Website2Img from "../assets/website2img.png"
export default function Projects() {
    const config={
        projects :[
            {
                image:WebsiteImg,
                description:'To-do List App using CRUD operation,Built with Reactjs with API',
                link:'https://frabjous-froyo-40a932.netlify.app/'
            },
            {
                image:Website1Img,
                description:'Social Media App ,Built with React js And AXIOSAPI',
                link:'https://guileless-peony-f3331d.netlify.app/'
            },
            {
                image:Website2Img,
                description:'Food E-commerce website like swiggy,Build with TECH Stack',
                link:'https://leafy-sopapillas-fb1d45.netlify.app/'
            },
            
            
        ]
    }
    return(
        <section id="projects" className="flex flex-col py-20 px-5 justify-center bg-primary">
            <div className="w-full">
                <div className="flex flex-col px-10 py-5  text-white" >
                <h1 className="text-4xl  border-b-4 border-[Darkblue] mb-5 w-[140px] font-bold">Projects</h1>
                <p>These are Some of My Best Projects. I have Built these React ,MERN and Tailwind CSS.Check them out..</p>
                </div>
            </div>
            <div className="w-full">
                <div className="flex flex-col md:flex-row px-3 gap-5 text-white">
                    {config.projects.map((project)=>(
                         <div className="relative">
                         <img className="h-[200px] w-[500px]" src={project.image}/>
                         <div className="project-desc">
                             <p className="text-center px-5 py-10">{project.description}</p>
                             <div className="flex justify-center">
                            <a className="btn" target="_blank" href={project.link}>View Project</a>
                         </div>
                         </div>
                       
                      </div>

                    ))}
             
                
                </div>
                
            </div>
        </section>
    )
}