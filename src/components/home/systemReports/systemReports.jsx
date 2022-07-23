import './style.css'
import { CgArrowLongRight, CgArrowLongLeft } from 'react-icons/cg'
import { systemReports } from '../../../data/systemReportData';
import { useState } from 'react';

const SystemReports = () => {
    const length = systemReports.length;

    const [current, setCurrent] = useState(0);

    const toggleReportBackward = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const toggleReportForward = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    if (!Array.isArray(systemReports) || systemReports.length <= 0) {
        return null
    }

    return (
        <section className="home-system-reports-section">
            <div className='container'>
                <div className="content">
                    <h1 className='content-title'>O que alguns de nossos clientes disseram sobre o sistema.</h1>
                    <div className='content-action'>
                        <p className='content-p'>Algumas de nossas avaliações não estão amostra mas você pode verificar todas clicando abaixo...</p>
                        <button className='btn text-btn'>Verificar todas as avaliações <CgArrowLongRight size={35} /></button>
                    </div>
                </div>
                {
                    systemReports.map((item, index) => {
                        return (
                            <div key={index} className={index === current ? 'system-reports' : 'system-reports inactive'}>
                                <figure>
                                    <img className='system-report-figure' src={item.img} />
                                </figure>
                                <div className='system-reports-content'>
                                    <h1 style={({
                                        'fontSize': '10rem',
                                        'color': '#e8e8e8',
                                        'fontFamily': 'Port Lligat Slab',
                                        'lineHeight': '0px'
                                    })}>“</h1>
                                    <h1 className='system-report-text'>
                                        {item.text}
                                    </h1>
                                    <p className='system-reports-p'>{item.name} - {item.busy}</p>
                                    <div className='system-report-actions'>
                                        <button onClick={
                                            () => {
                                                toggleReportBackward()
                                            }
                                        } className='report-action-btn left'>
                                            <CgArrowLongLeft color='#A279F7' size={35} />
                                        </button>
                                        <button onClick={
                                            () => {
                                                toggleReportForward()
                                            }
                                        }
                                            className='report-action-btn right'>
                                            <CgArrowLongRight color='var(--accent-color)' size={55} />
                                        </button>
                                    </div>
                                    <div className='report-counter'>
                                        {
                                            systemReports.map((item, index) => {
                                                return (<div key={index} className={index === current ? 'counter active' : 'counter'} />)
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default SystemReports;