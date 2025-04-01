import { NavLink } from 'react-router-dom';
import PlaceholderImage from '../assets/IMG_6498 (1).jpg';

// Replace these variables with your information
const firstName = 'Laura';
const jobTitle = 'Full Stack Software Engineer';
const company = 'DevCell & Associates';
const mainDuty = 'DevOps and BioInformatics';
const jobLocation = 'Birmingham';
const briefJobDescription = 'I am a passionate Full Stack Software Engineer and the founder of DevCell & Associates, a software development firm specializing in both open source and private projects. Based in Alabama (but working remotely), I thrive on helping clients bring their ideas to life, whether it is contributing to impactful open-source projects or developing tailored solutions for private ventures.';

const careerObjective = 'At DevCell & Associates, we offer a wide range of services, with a strong emphasis on open source contributions. I believe in the power of community and collaboration to drive innovation, and I actively engage in projects that make a difference in the software development world. As DevCell & Associates continues to grow, I am constantly evolving my skills and expanding my network. I am committed to staying at the forefront of tech advancements to better serve my clients and deliver solutions that exceed expectations.';

const personalLife = 'Outside of coding, I am a wellness junkie and a content creator, always seeking new ways to balance personal growth with professional success. Now, I am channeling my problem-solving into the world of software development, delivering clean, efficient code that solves real-world challenges. If you are looking for a dedicated developer or want to collaborate on an open-source project, I would love to hear from you! Feel free to reach out and lets create something amazing together.';

const About = () => {
  return (
    <main className="about-container">
      <section className='about-content-container'>
        <section className='image-container'>
          {/* Replace this placeholder image and alt tag with a professional headshot */}
          <img className='headshot' src={PlaceholderImage} alt="Laura Headshot image all rights reserved" />
        </section>
        <section className='description-container'>
          <h2 className='text-xl font-medium'>I&apos;m {firstName}, a {jobTitle} working for, {company} on {mainDuty} located in, {jobLocation}</h2>
          <p>{briefJobDescription}</p>
          <p>{careerObjective}</p>
          <p>{personalLife}</p>
          <p className='mb-4'> Use the click the button below to send an email!</p>
          <NavLink to="/contact" className="contact-me-btn">Contact Me</NavLink>
        </section>
      </section>
    </main>
  )
}
 export default About;