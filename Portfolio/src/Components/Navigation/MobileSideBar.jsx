import { useState } from 'react';
import navStyle from './Navigation.module.scss'
import { Link } from 'react-router-dom';

const [isOpen, setIsOpen] = useState(false)

const toggleNav = () => {

    setIsOpen(!isOpen)

}


export function MobileSideBar() {


    return (
        <section className={navStyle.mobileSideBar}>
            <nav className={`sidenav ${isOpen ? 'open' : ''}`}>
                <button onClick={toggleNav} className="menu-button">
                    ☰
                </button>
                <ul>
                    <Link to='/about'><li>About</li></Link>
                    <Link to='/projects'><li>Projects</li></Link>
                    <Link to='/contact'><li>Contact</li></Link>
                </ul>
            </nav>
        </section>
    )
}
