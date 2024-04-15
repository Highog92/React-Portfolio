import Gmail from '../../assets/SVGs/Gmail.svg'
import Github from '../../assets/SVGs/Github.svg'
import Linkedin from '../../assets/SVGs/Linkedin.svg'

export function Socials() {
    return (

        <section>
            <img src={Gmail} alt="Kontakt via Mail" />
            <img src={Github} alt="Github side" />
            <img src={Linkedin} alt="Linkedin side" />

        </section>
    )
}