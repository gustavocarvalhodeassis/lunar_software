import { useState } from 'react';
import { Link } from 'react-router-dom'
import LunarInput from '../../../global/inputs/maskedInput/LunarInput';

const RepInputs = () => {

     let [ieIsenta, setIeIsenta] = useState(false)

     let [etapa1, setEtapa1] = useState('etapa-1 active')

     let [etapa2, setEtapa2] = useState('etapa-2')

     let [value, setValue] = useState({})

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
                    <div className="ratio-selection">
                         <div className='ratio-content'>
                              <LunarInput className="ratio" type="radio" name="type" value="0" />
                              <label htmlFor="PF">Pessoa Física</label><br />
                         </div>
                         <div className='ratio-content'>
                              <LunarInput className="ratio" type="radio" name="type" value="1" defaultChecked />
                              <label htmlFor="PJ">Pessoa Jurídica</label><br />
                         </div>
                    </div>
                    <LunarInput className={'lunar-input'} mask={'99.999.999/9999-99'} name={'cnpj'} required={true} placeholder={'CNPJ *'} />
                    <label className='checkbox-content'>
                         IE Isento
                         <LunarInput className='checkbox' type={'checkbox'} onChange={() => { toggleIe(), clearIE() }} />
                    </label>
                    <LunarInput className={'lunar-input'} onChange={handleIE} value={ieState} name={'ie'} disabled={ieIsenta} required={true} placeholder={'Inscrição estadual *'} />
                    <LunarInput className={'lunar-input'} name={'ie'} required={true} placeholder={'Razão Social *'} />
                    <LunarInput className={'lunar-input'} name={'ie'} required={true} placeholder={'Nome Fantasia *'} />
               </div>
               <div className={"lunar-form-cl " + etapa1}>
                    <LunarInput className={'lunar-input'} name={'cnpj'} required={true} placeholder={'Nome e Sobrenome *'} />
                    <LunarInput className={'lunar-input'} name={'ie'} required={true} placeholder={'CPF *'} />
                    <LunarInput className={'lunar-input'} name={'ie'} required={true} placeholder={'Email *'} />
                    <LunarInput className={'lunar-input'} name={'ie'} required={true} placeholder={'Numero de Telefone *'} inputmask={'(99) 9 9999-9999'} />
                    <div className="input-form-action-button">
                         <Link to='/'><button className='btn text-btn'>Quero utilizar Lunar Software</button></Link>
                         <button onClick={() => nextEtapa()} className='btn filled-btn'>Próximo</button>
                    </div>
               </div>


               {/*ETAPA 2*/}


               <div className={"lunar-form-cl " + etapa2}>
                    <LunarInput className={'lunar-input'} name={'cnpj'} placeholder={'CEP'} />
                    <LunarInput className={'lunar-input'} name={'ie'} placeholder={'Endereço'} />
                    <LunarInput className={'lunar-input'} name={'ie'} placeholder={'Bairro'} />
                    <LunarInput className={'lunar-input'} name={'ie'} placeholder={'Numero'} />
               </div>
               <div className={"lunar-form-cl " + etapa2}>
                    <LunarInput className={'lunar-input'} name={'cnpj'} placeholder={'UF'} />
                    <label>
                         Senha para login ao painel do representante. * Guarde esta senha com segurança! *
                    </label>
                    <LunarInput className={'lunar-input'} name={'cnpj'} required={true} placeholder={'Senha'} />
                    <LunarInput className={'lunar-input'} name={'cnpj'} required={true} placeholder={'Confirmar senha'} />
                    <div className="input-form-action-button">
                         <button onClick={() => backEtapa()} className='btn text-btn'>Voltar</button>
                         <button type='submit' className='btn filled-btn'>Próximo</button>
                    </div>
               </div>

          </form >
     );
}

export default RepInputs;
