import burgerNavStyle from './BugerNav.module.scss'
import { Link } from 'react-router-dom';

const BurgerMenu = ({ isOpen, toggleMenu }) => {

export function Navigation() {

    return (
        <section className={`burger-menu ${isOpen ? "open" : ""}`} className={burgerNavStyle.navigation}>
            <nav className="hamburger-icon" onClick={toggleMenu}>>
                <Link to='/'><h2>M<span>.</span></h2> </Link>
                <ul>
                    <Link to='/about'><li>About</li></Link>
                    <Link to='/projects'><li>Projects</li></Link>
                    <Link to='/contact'><li>Contact</li></Link>
                </ul>
            </nav>
        </section>
    )
}
}