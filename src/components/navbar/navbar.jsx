import './style.css'
import Logo from '../logo/logo';
import { navbarData } from './data/navbarData'
import { CgMenu, CgClose } from 'react-icons/cg'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    let [activeMenu, setMenu] = useState('nav-links');

    function toggleMenu() {

        if (activeMenu === 'nav-links') {

            setMenu((activeMenu = 'nav-links active'))

        }

        else {

            setMenu((activeMenu = 'nav-links'))

        }

    }

    let prevScroll = window.pageYOffset;

    window.onscroll = function () {

        let currentScroll = window.pageYOffset

        if (prevScroll < currentScroll || prevScroll > currentScroll) {

            setMenu((activeMenu = 'nav-links'))

        }

        prevScroll = currentScroll

    }

    return (
        <header className='header'>
            <div className='container'>
                <nav className='navigation'>
                    <Logo />
                    {
                        activeMenu === 'nav-links'
                            ?
                            <button
                                onClick={
                                    () => {
                                        toggleMenu()
                                    }
                                }
                                className='menu-icon'>
                                <CgMenu
                                    size={25}
                                    color={'var(-dark-color)'}
                                />
                            </button>
                            :
                            <button
                                onClick={
                                    () => {
                                        toggleMenu()
                                    }
                                }
                                className='menu-icon'
                            >
                                <CgClose
                                    size={25}
                                    color={'var(-dark-color)'}
                                />
                            </button>
                    }

                    <ul className={activeMenu}>
                        {
                            navbarData.map((item, index) => {
                                return (
                                    <Link to={item.link}>
                                        <button
                                            key={index}>
                                            <li
                                                onClick={
                                                    () => {
                                                        toggleMenu()
                                                    }
                                                }
                                            >
                                                {item.name}
                                            </li>
                                        </button>
                                    </Link>
                                )
                            })
                        }
                        <Link to={'/lunarteste/integrar'}>
                            <button
                                className='btn filled-btn'>
                                Integrar!
                            </button>
                        </Link>
                    </ul>
                </nav>
            </div>
        </header >
    );
}

export default NavBar;