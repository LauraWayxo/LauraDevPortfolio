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
        Learn More Laura
        </NavLink>
      </section>
      <section className="projects home-subsection">
        <h3 className="subsection-intro-header">My Works</h3>
        <h2 className="subsection-big-header">Projects.</h2>
        <p className="subsection-paragraph">I have had the privilege of working on a variety of projects that showcase my skills and experience through real-world applications. Each project is thoughtfully presented with a brief description, along with links to the corresponding code repositories. These examples highlight my ability to solve complex problems and create efficient, scalable solutions.
          
        If you are interested in exploring my work further, click the link below to visit each projects dedicated page.

</p>
        <NavLink to="/projects">
        Laura's Projects
        </NavLink>
      </section>
    </main>
  )
}

export default Home