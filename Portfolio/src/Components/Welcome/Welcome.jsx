import WelcomeStyling from './Welcome.module.scss'

export function Welcome() {

    return (
        <section className={WelcomeStyling.landing}>
            <h1>Hey, I'm Mads</h1>
            <p>My name is Mads Serritslev. I am trying out web development
            </p>
            <p> and this is my first portfolio.</p>
            <p>If anything goes well, I will graduate late February 2024.</p>
            <button>Contact Me</button>
        </section>
    )
}
