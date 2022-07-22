import './style.css'
import { CgArrowLongRight, CgArrowLongLeft } from 'react-icons/cg'

const SystemReports = () => {
    return (
        <section className="home-system-reports-section">
            <div className='container'>
                <div className="content">
                    <h1 className='content-title'>O que alguns de nossos clientes disseram sobre o sistema.</h1>
                    <div className='content-action'>
                        <p className='content-p'>Algumas de nossas avaliações não estão amostra mas você pode verificar todas clicando abaixo...</p>
                        <button className='btn text-btn'>Verificar todas as avaliações <CgArrowLongRight /></button>
                    </div>
                </div>
                <div className='system-reports'>
                    <figure>
                        <img className='system-report-figure' src={'https://images.unsplash.com/photo-1658344588642-8db0df0fcaaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'} />
                    </figure>
                    <div className='system-reports-content'>
                        <h1 style={({
                            'fontSize': '10rem',
                            'color': '#e8e8e8',
                            'fontFamily': 'Port Lligat Slab',
                            'lineHeight': '0px'
                        })}>“</h1>
                        <h1 className='system-report-text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec magna id ex mollis mollis. Curabitur sed neque at turpis blandit sodales ac a libero.
                        </h1>
                        <p>Nome pessoa - Empresa</p>
                        <div className='system-report-actions'>
                            <button className='report-action-btn left'>
                                <CgArrowLongLeft color='#A279F7' size={35} />
                            </button>
                            <button className='report-action-btn right'>
                                <CgArrowLongRight color='var(--accent-color)' size={55} />
                            </button>
                        </div>
                        <div className='report-counter'>
                            <div className='counter' />
                            <div className='counter active' />
                            <div className='counter' />
                            <div className='counter' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SystemReports;