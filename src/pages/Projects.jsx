import { FaGithub } from "react-icons/fa6";

// Replace the projects inside the myProjects array with your own projects. Right now the array has sample data. You can add as many projects as you want. Each project should be an object with the following
// properties:
// - title: The title of the project
// - description: A description of the project
// - repositoryLink: A link to the GitHub repository of the project
// You can also add more properties if you want to display more information about your projects.
const myProjects = [
  {
    title: 'Code and Quill Bookstore',
    description: 'Collaboration: API calls & Javascript',
    repositoryLink: 'https://github.com/LauraWayxo/Code-and-Quill-Bookstore.git',
  },
  {
    title: 'CalEats.com Food Delivery App',
    description: 'Typescript based application',
    repositoryLink: 'https://github.com/LauraWayxo/p2t_capstone.git',
  },
  {
    title: 'FetchRain Weather Services',
    description: 'Javascript & API capabilities',
    repositoryLink: 'https://github.com/LauraWayxo/FetchRain.git',
  },
  {
    title: 'Laura Way Portfolio',
    description: 'The application you are looking at right now',
    repositoryLink: 'https://github.com/LauraWayxo/LauraDevPortfolio.git',
  },
  {
    title: 'Hack-a-Thon 90s Aesthetic Submission',
    description: '72 Hour Hack-a-Thon Submission',
    repositoryLink: 'https://github.com/LauraWayxo/90s-Aesthetic-ft-Codedex.git',
  },
];
const Projects = () => {
  return (
    <main className="projects-container">
      {myProjects.map((project) => (
        <section key={project.title} className="project-item border border-2 rounded-lg">
          <section className="project-image-container">
            <FaGithub />
          </section>
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p className="text-lg">{project.description}</p>
          <p>Check out the link to the project repository <a href={project.repositoryLink} target="_blank">Here</a> </p>

        </section>
      ))}
    </main>
  )
}

export default Projects