import { Link } from 'react-router-dom';
import navStyle from './navigation.module.scss'


export function Navigation() {

        return (
            <section className={navStyle.navigation}>
                <nav>
                    <Link to='/welcome'><h2>MS<span>.</span></h2> </Link>
                    <ul>
                        <Link to='/about'><li>CV</li></Link>
                        <Link to='/projects'><li>Projekter</li></Link>
                        <Link to='/contact'><li>Kontakt</li></Link>
                    </ul>
                </nav>
            </section>
        )
    }