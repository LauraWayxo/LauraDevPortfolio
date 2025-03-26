import { NavLink } from 'react-router-dom';
import PlaceholderImage from '../assets/placeholder_image.png';

// Replace these variables with your information
const firstName = 'Laura';
const jobTitle = 'Full Stack Software Engineer';
const company = 'DevCell & Associates';
const mainDuty = 'Open Source';
const jobLocation = 'Alabama (remotely)';
const briefJobDescription = 'Together, DevCell & Associates are helping clients with different tasks from open source to private software projects';
const careerObjective = 'I intend to take on more projects as DevCell & Associates grows as a network while also evolving my skills with the tech advancements';
const personalLife = 'I am a wellness junkie, content creator and now problem solving with through code.';

const About = () => {
  return (
    <main className="about-container">
      <section className='about-content-container'>
        <section className='image-container'>
          {/* Replace this placeholder image and alt tag with a professional headshot */}
          <img className='headshot' src={PlaceholderImage} alt="placeholder image" />
        </section>
        <section className='description-container'>
          <h2 className='text-xl font-medium'>I&apos;m {firstName}, a {jobTitle} working for, {company} on {mainDuty} located in, {jobLocation}</h2>
          <p>{briefJobDescription}</p>
          <p>{careerObjective}</p>
          <p>{personalLife}</p>
          <p className='mb-4'>If you are interested in my work, reach out to me!</p>
          <NavLink to="/contact" className="contact-me-btn">Contact Me</NavLink>
        </section>
      </section>
    </main>
  )
}
 export default About;