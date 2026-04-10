import clickImage from './image/click2.png'
import './App.css'

function App() {
  return (
    // p-5 add kiya taaki mobile par contents side se na chipke
    <div className="gap-10 bg-slate-900 min-h-screen flex-col flex justify-center items-center p-5">
      
      {/* Mobile ke liye text-4xl aur Desktop ke liye text-6xl */}
      <h1 className='text-4xl md:text-6xl font-bold font-[Poppins] italic text-slate-500 text-center'>
        Hi, welcome to my page!
      </h1>

      <div className='flex flex-wrap justify-center items-center gap-8'>
        
        {/* Card Component (Aap ise map bhi kar sakte hain) */}
        {[
          { title: "Project 1", link: "https://vd0511.github.io/TO-DO-LIST/" },
          { title: "Project 2", link: "https://vd0511.github.io/CALCULATER/" },
          { title: "Project 3", link: "https://vd0511.github.io/SIGNUP-LOGIN-PAGE/" },
          { title: "Project 4", link: "https://vd0511.github.io/Netflix-clone/" },
          { title: "Project 5", link: "https://cerulean-gelato-7d734a.netlify.app/" },
          { title: "project 6", link: "https://harmonious-zabaione-570ccd.netlify.app/"},
        ].map((project, index) => (
          <div key={index} className='bg-linear-to-r from-indigo-500 to-teal-400 h-64 w-64 flex justify-center  items-center flex-col rounded-2xl shadow-xl transform duration-300 hover:-translate-y-3 p-4'>
            <img src={clickImage} alt="click" className='box-border size-32 object-contain animate-bounce' />
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-4 text-gray-900 text-xl font-bold hover:underline"
            >
              View {project.title}
            </a>
          </div>
        ))}

      </div>
    </div>
  )
}

export default App
