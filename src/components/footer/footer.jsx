import './style.css'
import Logo from '../logo/logo'
import { Link } from 'react-router-dom'
import { navbarData } from '../navbar/data/navbarData'
import { socialData } from '../../data/socialIconData'

const Footer = () => {
     return (
          <footer className="footer">
               <div className='container'>
                    <div className='footer-content'>
                         <div className='footer-content-cl'>
                              <Logo />
                              <p className="content-p">
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              </p>
                              <div className="social-list">
                                   {
                                        socialData.map((item, index) => {
                                             return (
                                                  <div key={index} className="social-icon">
                                                       {item.icon}
                                                  </div>
                                             )
                                        })
                                   }
                              </div>
                         </div>
                         <div className='footer-content-cl links'>
                              <Link to='/'>
                                   <button>
                                        <li>
                                             Inicio
                                        </li>
                                   </button>
                              </Link>
                              <a href='#about'>
                                   <button>
                                        <li>
                                             Sobre
                                        </li>
                                   </button>
                              </a>
                              <Link to='/'>
                                   <button>
                                        <li>
                                             Painel do Representante
                                        </li>
                                   </button>
                              </Link>
                              <Link to='/'>
                                   <button>
                                        <li>
                                             Painel do contador
                                        </li>
                                   </button>
                              </Link>
                              <Link to='/'>
                                   <button>
                                        <li>
                                             Painel do suporte
                                        </li>
                                   </button>
                              </Link>
                              <Link to='/integrar'>

                                   <button className='btn filled-btn'>
                                        Integrar!
                                   </button>
                              </Link>
                         </div>
                    </div>
               </div>
          </footer>
     );
}

export default Footer;