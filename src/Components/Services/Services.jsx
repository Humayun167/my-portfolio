import { useState } from 'react';
import './Services.css'
const Services = () => {

    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="services section " id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>

      <div className="services__container container grid">
      {/*? Content-1 */}
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Frontend <br /> Development</h3>
          </div>

          <span  className="services__button" onClick={()=> toggleTab(1)}>
            View more
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 1 ? " services__modal active-modal" : "services__modal"} >
            <div className="services__modal-content">
              <i onClick={()=> toggleTab(0)} className=" uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Frontend Development</h3>
              <p className="services__modal-description">
                I create modern, responsive web applications using cutting-edge technologies and best practices.
              </p>

              <ul className="services__modal__services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Modern React applications with hooks and context</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Responsive design with mobile-first approach</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Performance optimization and clean code practices</p>
                </li>

              </ul>
            </div>
          </div>
        </div>

   {/*? Content-2 */}
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Ui/Ux <br /> Designer
            </h3>
          </div>

          <span  className="services__button" onClick={() => toggleTab(2)}>
            View more
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 2 ? " services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">UI/UX Design</h3>
              <p className="services__modal-description">
                I design intuitive user interfaces that provide exceptional user experiences and drive engagement.
              </p>

              <ul className="services__modal__services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    User research and persona development
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Wireframing and interactive prototyping</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Design systems and component libraries</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

   {/*? Content-3 */}
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Web <br />
              Consulting
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
            View more
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 3 ? " services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Web Consulting</h3>
              <p className="services__modal-description">
                I provide strategic guidance to help businesses establish their digital presence and optimize their web solutions.
              </p>

              <ul className="services__modal__services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Technical architecture and code reviews
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Performance audits and optimization strategies</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Technology stack recommendations</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Services;