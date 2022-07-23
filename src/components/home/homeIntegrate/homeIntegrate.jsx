import { useState } from 'react';
import { socialData } from '../../../data/socialIconData';
import './style.css'

const HomeIntegrate = () => {

    const userType = ({
        'color': '#191049 !important',
        'backgroundColor': 'transparent !important'
    })

    let active = 'user-type-button active'
    let inactive = 'user-type-button'

    let [jur, setJur] = useState(active)
    let [fis, setFis] = useState(inactive)

    const setUserTypeJur = () => {
        if (jur === active) {
            return null
        } else {
            setJur((jur = active))
            setFis((fis = inactive))
        }

        console.log('jur: ' + jur + '; fis: ' + fis + ';')
    }
    const setUserTypeFis = () => {
        if (fis === active) {
            return null
        } else {
            setFis((fis = active))
            setJur((jur = inactive))
        }

        console.log('fis: ' + fis + '; jur: ' + jur + ';')
    }

    return (
        <section className='home-integrate-section'>
            <div className='container'>
                <div className="content home-integrate-content">
                    <div className='home-integrate-helper'>
                        <div
                            style={({
                                'display': 'flex',
                                'flexDirection': 'column',
                                'gap': '20px'
                            })}
                        >
                            <h1 className='content-title'>
                                Venha ser representante Lunar Software.
                            </h1>
                            <p className='content-p'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <div className='home-integrate-social-icons'>
                            {
                                socialData.map((item) => {
                                    return (
                                        <>
                                            {
                                                item.icon
                                            }
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='home-integrate-action'>
                        <div
                            style={({
                                'display': 'flex',
                                'flexDirection': 'column',
                                'gap': '20px'
                            })}
                        >
                            <div className='user-type'>
                                <button
                                    onClick={
                                        () => {
                                            setUserTypeJur()
                                        }
                                    }
                                    className={
                                        'btn ' + jur}>
                                    Pessoa Juridica
                                </button>
                                <button
                                    onClick={
                                        () => {
                                            setUserTypeFis()
                                        }
                                    }
                                    className={
                                        'btn ' + fis}
                                >
                                    Pessoa Física
                                </button>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <form className='input-form'>
                            <input className='ipt input-grid' placeholder='EMAIL' />
                            <input className='ipt input-grid' placeholder='SENHA' />
                            <input className='ipt input-grid' placeholder='CNPJ' />
                            <form className='input-form-action-button'>
                                <button className='btn text-btn'>Quero utilizar Lunar Software.</button>
                                <input type={'button'} className='btn filled-btn' value='Próximo' />
                            </form>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeIntegrate;