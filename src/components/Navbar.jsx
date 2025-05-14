import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react';

const Navbar = () => {
    const [active,setActive] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 150){
                setActive(true)
            }else{
                setActive(false)
            }
        }

        window.addEventListener('scroll',handleScroll);
        return () => {
            window.removeEventListener('scroll',handleScroll)
        }
    },[])
    return (
        <nav className="navbar  py-7 flex items-center justify-between">
            <div className="logo">
                <h1 className='text-3xl font-bold   p-1 md:bg-transparent text-white  '>Portfolio</h1>
            </div>
               
            <ul className={`manu flex  items-center sm:gap-10 gap-4 md:static fixed left-1/2  -translate-x-1/2 md:-translate-x-0 md:opacity-100 bg-white/30 p-4 px-8 rounded-b-2xl backdrop-blur-md  md:bg-transparent transition-all  ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}>
                <li>
                    <Link to = '/' className='sm:text-lg text-base font-medium'>Home</Link>
                </li>
                <li>
                    <Link to = '/about' className='sm:text-lg text-base font-medium'>ABout</Link>
                </li>
                <li>
                    <Link to = '/projects' className='sm:text-lg text-base font-medium'>Projects</Link>
                </li>
                <li>
                    <Link to = '/contact' className='sm:text-lg text-base font-medium'>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}



export default Navbar