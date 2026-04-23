import { useState } from 'react';
import './Portfolio.css';
import ProjectModal from './ProjectModal';

import image1 from '../../assets/greenNest.png'
import image2 from '../../assets/employnix.png'
import image3 from '../../assets/hellofoodie.png'

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const projects = [
        {
            title: 'GreenNest',
            description: 'An eco-friendly e-commerce platform with integrated social features for organic products and sustainable living.',
            LIVE: 'https://green-nest-frontend.vercel.app/',
            github: 'https://github.com/Humayun167/green_nest',
            image: image1,
            features: [
                'User authentication with Firebase',
                'E-commerce product catalog with filters',
                'Shopping cart and checkout system',
                'Integrated social features',
                'Responsive design for all devices',
                'Admin dashboard for product management'
            ],
            technologies: ['React', 'Firebase', 'Tailwind CSS', 'Node.js', 'MongoDB']
        },
        {
            title: 'Employnix',
            description: 'Built a job portal that connects employers and job seekers with real-time job postings and applications.',
            LIVE: 'https://employnix-a2w2.vercel.app/',
            github: 'https://github.com/Humayun167/Employnix',
            image: image2,
            features: [
                'User registration for job seekers and employers',
                'Real-time job postings',
                'Application tracking system',
                'Job search with advanced filters',
                'User profile management',
                'Notification system for new jobs'
            ],
            technologies: ['React', 'Express.js', 'MongoDB', 'Node.js', 'JWT Authentication']
        },
        {   
            title: 'Hello Foodie',
            description: 'Developed an online food ordering platform with a user-friendly interface for restaurants and customers.',
            LIVE: 'https://hello-foodie-client-524l.vercel.app/',
            github: 'https://github.com/Humayun167/hello_foodie_client',
            image: image3,
            features: [
                'Restaurant and menu browsing',
                'Food ordering with customization',
                'Real-time order tracking',
                'Payment integration',
                'User reviews and ratings',
                'Responsive mobile ordering experience'
            ],
            technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Stripe API']
        }
        // Add more projects as needed
    ];

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };


    return (
        <>
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
                            <div className="portfolio-actions">
                                <button 
                                    className="portfolio-btn details-btn"
                                    onClick={() => openModal(project)}
                                >
                                    View Details
                                </button>
                            </div>
                            <div className="portfolio-links">
                                <a href={project.LIVE} target="_blank" rel="noopener noreferrer">🌐 Live</a>
                                <a href={project.github} target="_blank" rel="noopener noreferrer">💻 GitHub</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
};

export default Portfolio;