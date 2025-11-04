import { useState } from 'react';
import './Header.css';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
       /*=============== Toggle Menu ===============*/
       const [Toggle, showMenu] = useState(false);
       const { isDark, toggleTheme } = useTheme();
       return (
           <header className="header">
               <nav className="nav container">
                   <a href="index.html" className="nav__logo">Humayun</a>
   
                   <div className={Toggle ? "nav__menu show-menu" :
               "nav__menu"}>
                       <ul className="nav__list grid">
                           <li className="nav__item">
                               <a href="#home" className="nav__link active__link">
                                   <i className="uil uil-estate nav__icon"></i>Home
                               </a>
                           </li>
                           
                           <li className="nav__item">
                               <a href="#about" className="nav__link">
                                   <i className="uil uil-user nav__icon"></i>About
                               </a>
                           </li>
                           <li className="nav__item">
                               <a href="#skills" className="nav__link">
                                   <i className="uil uil-file nav__icon"></i>Skills
                               </a>
                           </li>
                           <li className="nav__item">
                               <a href="#services" className="nav__link">
                                   <i className="uil uil-briefcase-alt nav__icon">  </i>Services
                               </a>
                           </li>
                           <li className="nav__item">
                               <a href="#portfolio" className="nav__link">
                                   <i className="uil uil-scenery nav__icon"></i>Portfolio
                               </a>
                           </li>
                           <li className="nav__item">
                               <a href="#contact" className="nav__link">
                                   <i className="uil uil-message nav__icon"></i>Contact
                               </a>
                           </li>
                           <li className="nav__item">
                               <label className="switch">
                                   <input
                                       checked={isDark}
                                       onChange={toggleTheme}
                                       type="checkbox"
                                   />
                                   <span className="slider">
                                       <div className="star star_1"></div>
                                       <div className="star star_2"></div>
                                       <div className="star star_3"></div>
                                       <svg viewBox="0 0 16 16" className="cloud_1 cloud">
                                           <path
                                               transform="matrix(.77976 0 0 .78395-299.99-418.63)"
                                               fill="#fff"
                                               d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
                                           ></path>
                                       </svg>
                                   </span>
                               </label>
                           </li>
                       </ul>
   
   
                       <i className="uil uil-times nav__close "onClick={()=> showMenu(!Toggle)}></i>
                   </div>
   
                   <div className="nav__toggle" onClick={()=> showMenu(!Toggle)}>
                   <i className="uil uil-apps"></i>
                   </div>
               </nav>
           </header>
       );
   };
export default Header;