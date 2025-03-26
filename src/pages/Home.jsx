import { NavLink } from "react-router-dom";
import PlaceholderHero from '../assets/GirlWhoCodeStage.jpg'

const fullName = 'Laura Way';
const personalQuote = 'I never believed I could or couldn’t do something because I was a woman. I remember something my mom always told me: ‘You are the best at whatever you do. - Privahini Bradoo';
const professionalSummary = 'Building innovative solutions, empowering healthy lifestyles, and crafting impactful campaigns.';

const Home = () => {
  return (
    <main className="home-container">
      <section className="home-hero home-subsection">
        <h2 className="text-4xl mb-2 font-bold text-white">Hi, I am {fullName}</h2>
        <p className="subsection-paragraph text-white">{personalQuote}</p>
        <NavLink to="/contact" className="text-white font-bold">
        Contact Me
        </NavLink>
        {/* Replace the src with your own placeholder and change the alt to match the description */}
        <img className="hero-background" src={PlaceholderHero} alt="Girls-Who-Code-conference-stage" />
      </section>
      <section className="overview home-subsection">
        <h3 className="subsection-intro-header">Introduction</h3>
        <h2 className="subsection-big-header">Overview.</h2>
        <p className="subsection-paragraph">{professionalSummary}</p>
        <NavLink to="/about">
        Learn More About Me
        </NavLink>
      </section>
      <section className="projects home-subsection">
        <h3 className="subsection-intro-header">My Works</h3>
        <h2 className="subsection-big-header">Projects.</h2>
        <p className="subsection-paragraph">I have worked on multiple project, the projects I have worked on demonstrate my skills and experience through real-life examples of my work. Each project is briefly described and includes links to code repositories that showcase my ability to tackle challenging problems. If you are interested in my work click on the link below to go to the project page.</p>
        <NavLink to="/projects">
        View Projects
        </NavLink>
      </section>
    </main>
  )
}

export default Home