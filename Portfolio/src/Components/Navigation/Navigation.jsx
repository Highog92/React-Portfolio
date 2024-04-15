import { Link } from 'react-router-dom';
import navStyle from './navigation.module.scss'
import { Socials } from '../Socials/Socials';

export function Navigation() {

        return (
            <section className={navStyle.navigation}>
                <nav>
                    <Link to='/welcome'><h2>MS<span>.</span></h2> </Link>
                    <ul>
                        <Link to='/about'><li>CV</li></Link>
                        <Link to='/projects'><li>Projekter</li></Link>
                        <Socials/>
                    </ul>
                </nav>
            </section>
        )
    }