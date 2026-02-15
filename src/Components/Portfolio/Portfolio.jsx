import './Portfolio.css';

import image1 from '../../assets/greennest.png'
import image2 from '../../assets/employnix.png'
import image3 from '../../assets/hellofoodie.png'

const Portfolio = () => {
    const projects = [
        {
            title: 'GreenNest',
            description: 'An eco-friendly e-commerce platform with integrated social features for organic products and sustainable living. ',
            LIVE: 'https://green-nest-frontend.vercel.app/',
            github: 'https://github.com/Humayun167/green_nest',
            image: image1,
        },
        {
            title: 'Employnix',
            description: 'Built a job portal that connects employers and job seekers with real-time job postings and applications.',
            LIVE: 'https://employnix-a2w2.vercel.app/',
            github: 'https://github.com/Humayun167/Employnix',
            image: image2,
          
        },
        {   
            title: 'Hello Foodie',
            description: 'Developed an online food ordering platform with a user-friendly interface for restaurants and customers.',
            LIVE: 'https://hello-foodie-client-524l.vercel.app/',
            github: 'https://github.com/Humayun167/hello_foodie_client',
            image: image3,
          
        },
        // Add more projects as needed
    ];

    return (
        <section className="portfolio" id="portfolio">
            <h2>My Portfolio</h2>
            <div className="portfolio-items">
                {projects.map((project, index) => (
                    <div key={index} className="portfolio-item card">
                        <img src={project.image} alt={project.title} className="portfolio-image" />
                        <h3>{project.title}</h3>
                        <p style={{
            textAlign: 'justify',
            fontSize: '0.8rem',
            lineHeight: '1.7'
          }}>{project.description}</p>
                        <a href={project.LIVE} target="_blank" rel="noopener noreferrer">View Project</a>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;