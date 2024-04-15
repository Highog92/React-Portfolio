import welcomeStyling from './styles/Welcome.module.scss'
import { Button } from '../Components/Button/Button'
export function Welcome() {

    return (
        <section className={welcomeStyling.landing}>
            <h1>Hey og Velkommen</h1>
            
            <p>Mit navn er Mads og nyudlært webudvikler.</p>

            
            <Button text={"Kontakt mig"} />
        </section>
    )
}
