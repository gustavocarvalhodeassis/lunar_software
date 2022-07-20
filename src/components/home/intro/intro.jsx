import './style.css'
import {CgChevronDown} from 'react-icons/cg'

const Intro = () => {
    return (
        <section className="intro-section">
            <div className='blubble-1' />
            <div className='blubble-2' />
            <div className="container">
                <div className="intro-content">
                    <h1>
                        Sistema de gestão empresarial.
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                        In nec magna id ex mollis mollis.
                        Curabitur sed neque at turpis
                        blandit sodales ac a libero.
                    </p>
                    <button className='btn filled-btn'>
                        Saiba mais <CgChevronDown size={25} color={'var(--light-color)'}/>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Intro;