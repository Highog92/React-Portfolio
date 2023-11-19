import { Link } from 'react-router-dom'
import style from './ContackMe.module.scss'
export function ContactMe() {

    return (
        <>
            <Link to='/contact'>
                <button className={style.ContactMeBtn}>Kontakt Mig</button>
            </Link>
        </>
    )
}