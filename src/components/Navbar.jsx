import {Link} from 'react-router-dom';
import logo from '../../public/V.png'

const Navbar = () => {
    return (
        <nav className="navbar  py-7 flex items-center justify-between">
            <div className="logo">
                <h1 className='text-3xl font-bold'>Portfolio</h1>
            </div>
            <ul className='flex justify-between items-center gap-10 sm:static fixed left-1/2  -translate-x-1/2'>
                <li>
                    <Link to = '/' className='text-lg font-medium'>Home</Link>
                </li>
                <li>
                    <Link to = '/about' className='text-lg font-medium'>ABout</Link>
                </li>
                <li>
                    <Link to = '/projects' className='text-lg font-medium'>Projects</Link>
                </li>
                <li>
                    <Link to = '/contact' className='text-lg font-medium'>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}



export default Navbar