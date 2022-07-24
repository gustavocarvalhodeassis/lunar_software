import IntegrateContent from "../../integrateContent/integrateContent";
import { CgArrowLeft } from 'react-icons/cg'
import { useState } from "react";
import { Link } from "react-router-dom";

const IntegrateGetInfoRep = () => {

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
     }
     const setUserTypeFis = () => {
          if (fis === active) {
               return null
          } else {
               setFis((fis = active))
               setJur((jur = inactive))
          }
     }

     return (
          <>
               <div className='push-title'>
                    <Link to={'/integrar'}>
                         <CgArrowLeft size={50} color='var(--dark-color)' />
                    </Link>
                    <h1 className='push-title-text'>
                         Você escolheu Representante. por favor preencha os dados.
                    </h1>
               </div>
               <div className="integrate-get-info-form">
                    <div className='place-1'>
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
                         <p className='content-p'>
                              Algumas informações sobre sua empresa, logo a frente, informações para contato.
                         </p>
                         <form className='form-1'>
                              <input className='ipt input-grid' placeholder='CNPJ' />
                              <input className='ipt input-grid' placeholder='Razão Social' />
                              <input className='ipt input-grid' placeholder='Fantasia' />
                         </form>
                    </div>
                    <div className="place-2">
                         <form className='form-2'>
                              <input className='ipt input-grid' placeholder='Email' />
                              <input className='ipt input-grid' placeholder='Numero de telefone' />
                              <div className='input-form-action-button'>
                                   <input type={'button'} className='btn text-btn' value="Quero ser cliente Lunar Software." />
                                   <input type={'button'} className='btn filled-btn' value="Enviar" />
                              </div>
                         </form>
                    </div>
               </div>
          </>
     );
}

export default IntegrateGetInfoRep;