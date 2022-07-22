import './style.css'
import { CgArrowLongRight } from 'react-icons/cg'

const SystemImages = () => {
    return (
        <section className="home-system-images-section">
            <div className='container'>
                <div className="content">
                    <h1 className='content-title'>Algumas imagens de nosso sistema...</h1>
                    <div className='content-action'>
                        <p className='content-p'>Algumas de nossas imagens não estão amostra mas você pode verificar todas clicando abaixo...</p>
                        <button className='btn text-btn'>Verificar todas as imagens <CgArrowLongRight /></button>
                    </div>
                </div>
                <div className='system-images'>
                    <figure >
                        <img className='system-image-figure' src={'https://images.unsplash.com/photo-1468245856972-a0333f3f8293?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} />
                    </figure>
                    <figure >
                        <img className='system-image-figure' src={'https://images.unsplash.com/photo-1468245856972-a0333f3f8293?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} />
                    </figure>
                    <figure >
                        <img className='system-image-figure' src={'https://images.unsplash.com/photo-1468245856972-a0333f3f8293?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} />
                    </figure>
                </div>
            </div>
        </section>
    );
}

export default SystemImages;