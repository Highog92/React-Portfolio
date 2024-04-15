import { Link } from 'react-router-dom'
import style from './Button.module.scss'

export function Button({text}) {

    return (
        <>
            <Link to='/contact'>
                <button className={style.button}>{text}</button>
            </Link>
        </>
    )
}