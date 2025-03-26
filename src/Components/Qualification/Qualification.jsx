import './Qualification.css';

const qualifications = [
    {
        id: 1,
        degree: 'Bachelor of Science in Computer Science',
        institution: 'University of Example',
        year: '2015 - 2019',
    },
    {
        id: 2,
        degree: 'Master of Science in Software Engineering',
        institution: 'Example Institute of Technology',
        year: '2019 - 2021',
    },
];

const Qualification = () => {
    return (
        <section className="qualification-section">
            <h2>Qualifications</h2>
            <div className="qualification-list">
                {qualifications.map((qualification) => (
                    <div key={qualification.id} className="qualification-item">
                        <h3>{qualification.degree}</h3>
                        <p>{qualification.institution}</p>
                        <span>{qualification.year}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Qualification;