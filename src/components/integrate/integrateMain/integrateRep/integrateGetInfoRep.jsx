import { CgArrowLeft } from 'react-icons/cg'
import { Link } from "react-router-dom";
import { integrateRoute } from "../../../../router";
import InputMask from 'react-input-mask'
import MaskedInput from '../../../global/inputs/maskedInput/maskedInput';
import { useState } from 'react';
import { cadRepData } from '../../../../data/integrateData';

const IntegrateGetInfoRep = () => {

     const [cnpj, setCnpj] = useState('')

     let [lockIe, setLockIe] = useState(false)

     let lockIeValue = useState('')

     const toggleIe = () => {
          if (lockIe === true) {
               setLockIe((lockIe = false))
               lockIeValue = ''
          } else {
               setLockIe((lockIe = true))
          }
     }

     return (
          <>
               <div className='push-title'>
                    <Link to={integrateRoute}>
                         <CgArrowLeft size={50} color='var(--dark-color)' />
                    </Link>
                    <h1 className='push-title-text'>
                         Você escolheu Representante. por favor preencha os dados.
                    </h1>
               </div>
               <form className="integrate-get-info-form" action={'../painel/register-reseller.php'} method='post' >
                    <div className='place-1'>
                         <div className='user-type'>
                              <label>Pessoa Física: </label><input type="radio" name="is_pj" value="0" /><br />
                              <label>Pessoa Jurídica: </label><input type="radio" name="is_pj" value="1" /><br /><br />
                         </div>
                         <p className='content-p'>
                              Algumas informações sobre sua empresa, logo a frente, informações para contato.
                         </p>
                         <div className='form-1'>
                              {
                                   cadRepData.slice(0, 4).map((item, index) => {
                                        return (
                                             <>{
                                                  index === 2 ?
                                                       <label
                                                            className='check-box'
                                                       >
                                                            {item.inputPlaceholder}
                                                            :
                                                            <input
                                                                 type={item.inputType}
                                                                 name={item.inputName}
                                                                 onChange={toggleIe}
                                                                 value={lockIe}
                                                            />
                                                       </label>
                                                       :
                                                       <MaskedInput
                                                            key={index}
                                                            type={item.inputType}
                                                            mask={item.inputMask}
                                                            placeholder={item.inputPlaceholder}
                                                            name={item.inputName}
                                                            value={(event) => index === 3 && lockIe ? lockIeValue : event.target.value}
                                                            required={item.required}
                                                            className={'ipt input-grid'}
                                                            readOnly={index === 3 ? lockIe : false}
                                                       />
                                             }</>
                                        )
                                   })
                              }
                         </div>
                    </div>
                    <input id='filled-basic' type={'hidden'} name='callback_url_success' value="../painel/cadastro-sucesso.html" />
                    <div className='place-1'>
                         <div className='user-type'>
                              <label>Pessoa Física: </label><input type="radio" name="is_pj" value="0" /><br />
                              <label>Pessoa Jurídica: </label><input type="radio" name="is_pj" value="1" /><br /><br />
                         </div>
                         <p className='content-p'>
                              Algumas informações sobre sua empresa, logo a frente, informações para contato.
                         </p>
                         <div className='form-1'>
                              <input name="name" type='text' className='ipt input-grid' placeholder='Nome' />
                              <MaskedInput value={cnpj} onChange={(event) => setCnpj(event.target.value)} mask='99.999.999/9999-99' name="cnpj" className='ipt input-grid' placeholder='CNPJ' />
                              <input name="company_name" type='text' className='ipt input-grid' placeholder='Razão Social' />
                              <input name="trading_name" type='text' className='ipt input-grid' placeholder='Fantasia' />
                              <label className='check-box'>
                                   Inscrição estadual ISENTA
                                   <input name="ie_free" type='checkbox' placeholder='Incrição Estadual ISENTA' />
                              </label>
                              <input name="ie" type='number' className='ipt input-grid' placeholder='Incrição Estadual' />
                              <input name="cpf" type='number' className='ipt input-grid' placeholder='CPF' />
                         </div>
                    </div>
                    <div className="place-2">
                         <div className='form-2'>
                              <input name="email" type='email' className='ipt input-grid' placeholder='Email' />
                              <input name="password" type="password" className='ipt input-grid' />
                              <input name="phone" type='number' className='ipt input-grid' placeholder='Numero de telefone' />
                              <input name="address" type='text' className='ipt input-grid' placeholder='Endereço' />
                              <input name="address_number" type='number' className='ipt input-grid' placeholder='Numero' />
                              <input type='text' className='ipt input-grid' placeholder='Bairro' />
                              <input name="address_complement" type='text' className='ipt input-grid' placeholder='Complemento' />
                              <input name="city" type='text' className='ipt input-grid' placeholder='Cidade' />
                              <input name="uf" type='text' className='ipt input-grid' placeholder='Estado(UF)' />
                              <input name="cep" type='number' className='ipt input-grid' placeholder='CEP' />
                              <div className='input-form-action-button'>
                                   <input type={'button'} className='btn text-btn' value="Quero ser cliente Lunar Software." />
                                   <input type={'submit'} className='btn filled-btn' value="Enviar" />
                              </div>
                         </div>
                    </div>
               </form>
          </>
     );
}

export default IntegrateGetInfoRep;