import navStyle from './Navigation.module.scss'
import { Link } from 'react-router-dom';

export function BurgerNav() {

    return (
        <section className={navStyle.navigation}>
            <nav>
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
