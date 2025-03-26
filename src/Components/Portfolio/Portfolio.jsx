import './Portfolio.css';

import image1 from '../../assets/swiftcart.png'
import image2 from '../../assets/employnix.png'
import image3 from '../../assets/hellofoodie.png'

const Portfolio = () => {
    const projects = [
        {
            title: 'Swift Cart',
            description: 'Designed and developed a responsive e-commerce platform with user authentication and secure payment processing. ',
            LIVE: 'https://swift-cart-7cxz.vercel.app/',
            github: 'https://github.com/Humayun167/SwiftCart',
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
        <section className="portfolio " id="portfolio">
            <h2>My Portfolio</h2>
            <div className="portfolio-items">
                {projects.map((project, index) => (
                    <div key={index} className="portfolio-item card">
                        <img src={project.image} alt={project.title} className="portfolio-image" />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;