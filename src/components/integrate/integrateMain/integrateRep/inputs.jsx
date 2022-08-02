import { useState } from 'react';
import { Link } from 'react-router-dom'
import LunarInput from '../../../global/inputs/maskedInput/LunarInput';

const RepInputs = () => {

     let [ieIsenta, setIeIsenta] = useState(false)

     let [ps_type, setPs_type] = useState(1)

     const togglePs = () => {
          ps_type === 1 ? setPs_type(0) : setPs_type(1)
     }

     let [etapa1, setEtapa1] = useState('etapa-1 active')

     let [etapa2, setEtapa2] = useState('etapa-2')

     const nextEtapa = () => {
          setEtapa1((etapa1 = 'etapa-1'))
          setEtapa2((etapa2 = 'etapa-2 active'))
     }
     const backEtapa = () => {
          setEtapa1((etapa1 = 'etapa-1 active'))
          setEtapa2((etapa2 = 'etapa-2'))
     }

     const toggleIe = () => {
          ieIsenta ? setIeIsenta((ieIsenta = false)) : setIeIsenta((ieIsenta = true))
     }

     const [ieState, setIeState] = useState('');

     const clearIE = () => {
          setIeState('');
     };

     const handleIE = event => {
          setIeState(event.target.value);
     };

     return (
          <form className='lunar-form'>

               {/*ETAPA 1*/}

               <div className={"lunar-form-cl " + etapa1}>

                    {/*RATIO SELEÇÃO PF OU PJ*/}

                    <div className="ratio-selection">

                         {/*RATIO PF*/}

                         <div className='ratio-content'>
                              <LunarInput
                                   className="ratio"
                                   type="radio"
                                   name="type"
                                   value="0"
                                   onChange={() => togglePs()}
                              />
                              <label htmlFor="PF">
                                   Pessoa Física
                              </label>
                              <br />
                         </div>

                         {/*RATIO PJ*/}

                         <div className='ratio-content'>
                              <LunarInput
                                   className="ratio"
                                   type="radio"
                                   name="type"
                                   value="1"
                                   defaultChecked
                                   onChange={() => togglePs()}
                              />
                              <label htmlFor="PJ">
                                   Pessoa Jurídica
                              </label>
                              <br />
                         </div>
                    </div>

                    {/*FIM RATIO SELEÇÃO PF OU PJ*/}

                    {/*INPUT CNPJ / CPF*/}

                    <LunarInput
                         className={'lunar-input'}
                         mask={ps_type === 1 ? '99.999.999/9999-99' : '999.999.999-99'}
                         name={ps_type === 1 ? 'cnpj' : 'cpf'}
                         required={true}
                         placeholder={ps_type === 1 ? 'CNPJ *' : 'CPF *'}
                    />

                    {/*FIM INPUT CNPJ / CPF */}

                    {/*IE ISENTA CHECKBOX */}

                    {
                         ps_type === 1
                              ?
                              <label className='checkbox-content'>
                                   IE Isento
                                   <LunarInput
                                        className='checkbox'
                                        type={'checkbox'}
                                        onChange={() => { toggleIe(), clearIE() }}
                                   />
                              </label>
                              :
                              <></>
                    }

                    {/*FIM INPUT CNPJ / CPF */}

                    {/*INPUT IE / NAME SURNAME IF PF */}

                    <LunarInput
                         className={'lunar-input'}
                         type={ps_type === 1 ? 'number' : 'text'}
                         onChange={ps_type === 1 ? handleIE : null}
                         value={ps_type === 1 ? ieState : null}
                         name={ps_type === 1 ? 'ie' : 'name'}
                         disabled={ps_type === 1 ? ieIsenta : false}
                         required={true}
                         placeholder={ps_type === 1 ? 'Inscrição estadual *' : 'Nome e sobrenome *'}
                    />

                    {/* FIM INPUT IE / NAME SURNAME IF PF */}

                    {
                         ps_type === 1
                              ?
                              <>

                                   {/*INPUT RAZAO SOCIAL / NOME FANTASIA IF PJ */}

                                   <LunarInput
                                        className={'lunar-input'}
                                        name={'ie'} required={true}
                                        placeholder={'Razão Social *'}
                                   />

                                   <LunarInput
                                        className={'lunar-input'}
                                        name={'ie'}
                                        required={true}
                                        placeholder={'Nome Fantasia *'}
                                   />

                                   {/*INPUT IE / NAME SURNAME IF PF */}

                              </>
                              :
                              <></>
                    }

               </div>
               <div className={"lunar-form-cl " + etapa1}>

                    {
                         ps_type === 1
                              ?
                              <>
                                   <LunarInput className={'lunar-input'} name={'cnpj'} required={true} placeholder={'Nome e Sobrenome *'} />
                                   <LunarInput className={'lunar-input'} name={'ie'} mask={'999.999.999-99'} required={true} placeholder={'CPF *'} />
                              </>
                              :
                              <></>
                    }
                    <LunarInput
                         className={'lunar-input'}
                         name={'ie'}
                         required={true}
                         placeholder={'Email *'}
                    />
                    <LunarInput
                         className={'lunar-input'}
                         name={'ie'}
                         mask={'+55 (99) 9 9999-9999'}
                         required={true}
                         placeholder={'Numero de Telefone *'}
                         inputmask={'(99) 9 9999-9999'}
                    />
                    <div className="input-form-action-button">
                         <Link to='/'>
                              <button className='btn text-btn'>
                                   Quero utilizar Lunar Software
                              </button>
                         </Link>
                         <button
                              onClick={() => nextEtapa()}
                              className='btn filled-btn'
                         >
                              Próximo
                         </button>
                    </div>
               </div>

               {/*ETAPA 2*/}

               <div className={"lunar-form-cl " + etapa2}>
                    <LunarInput className={'lunar-input'} mask={'99.999-999'} name={'cnpj'} placeholder={'CEP'} />
                    <LunarInput className={'lunar-input'} name={'ie'} placeholder={'Endereço'} />
                    <LunarInput className={'lunar-input'} name={'ie'} placeholder={'Bairro'} />
                    <LunarInput className={'lunar-input'} name={'ie'} placeholder={'Numero'} />
               </div>
               <div className={"lunar-form-cl " + etapa2}>
                    <LunarInput className={'lunar-input'} name={'cnpj'} type="text" placeholder={'UF'} minLength={2} maxLength={2} />
                    <label>
                         Senha para login ao painel do representante. * Guarde esta senha com segurança! *
                    </label>
                    <LunarInput className={'lunar-input'} name={'cnpj'} required={true} placeholder={'Senha *'} />
                    <LunarInput className={'lunar-input'} name={'cnpj'} required={true} placeholder={'Confirmar senha *'} />
                    <div className="input-form-action-button">
                         <button onClick={() => backEtapa()} className='btn text-btn'>Voltar</button>
                         <button type='submit' className='btn filled-btn'>Próximo</button>
                    </div>
               </div>

          </form >
     );
}

export default RepInputs;
