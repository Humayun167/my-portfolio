import './ProjectModal.css';
import { useTheme } from '../../context/ThemeContext';

const ProjectModal = ({ project, isOpen, onClose }) => {
    const { isDark } = useTheme();

    if (!isOpen || !project) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className={`modal-content ${isDark ? 'dark' : 'light'}`} onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>×</button>
                
                <img src={project.image} alt={project.title} className="modal-image" />
                
                <div className="modal-body">
                    <h2>{project.title}</h2>
                    
                    <div className="modal-description">
                        <h3>About This Project</h3>
                        <p>{project.description}</p>
                    </div>

                    {project.features && (
                        <div className="modal-features">
                            <h3>Key Features</h3>
                            <ul>
                                {project.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.technologies && (
                        <div className="modal-tech">
                            <h3>Technologies Used</h3>
                            <div className="tech-tags">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="modal-links">
                        <a href={project.LIVE} target="_blank" rel="noopener noreferrer" className="btn btn-live">
                            🌐 View Live
                        </a>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-github">
                            💻 GitHub Repository
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
