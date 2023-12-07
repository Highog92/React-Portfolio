import welcomeStyling from './styles/Welcome.module.scss'
import { ContactMe } from '../Components/ContactMe.jsx/ContactMe'

export function Welcome() {

    return (
        <section className={welcomeStyling.landing}>
            <h1>Hey</h1>
            <p>Velkommen til min portfolio</p>
            <p>Mit navn er Mads Serritslev. Jeg er ved at uddanne mig til webudvikler</p>
            <p>Hvis alt går som det skal, vil jeg være færdig uddannet 15. marts 2024</p>
            <ContactMe />
        </section>
    )
}
