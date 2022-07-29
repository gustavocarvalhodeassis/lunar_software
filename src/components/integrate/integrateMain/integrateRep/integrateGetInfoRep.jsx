import { CgArrowLeft } from 'react-icons/cg'
import { Link } from "react-router-dom";
import { integrateRoute } from "../../../../router";
import MaskedInput from '../../../global/inputs/maskedInput/maskedInput';
import { cadRepData } from '../../../../data/integrateData';
import { Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useState } from 'react';

const IntegrateGetInfoRep = () => {

     const item = cadRepData;
     let [ieIsenta, setIeIsenta] = useState('0')

     let [inputState, setInputState] = useState(true)

     const [inputValue, setInputValue] = useState("");

     const handleUserInput = (e) => {
          setInputValue(e.target.value);
     };

     // Reset Input Field handler
     const resetInputField = () => {
          setInputValue("");
     };


     const lockIe = () => {

          if (ieIsenta === '0') {
               setIeIsenta((ieIsenta = '1'))
               setInputState((inputState = false))
          } else {
               setIeIsenta((ieIsenta = '0'))
               setInputState((inputState = true))
               resetInputField()
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
                              <FormControl>
                                   <FormLabel id="demo-radio-buttons-group-label">Tipo de pessoa</FormLabel>
                                   <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                        row={true}
                                   >
                                        <FormControlLabel value="is_pj" control={<Radio />} label="Pessoa Física" />
                                        <FormControlLabel value="is_pf" control={<Radio />} label="Pessoa Jurídica" />
                                   </RadioGroup>
                              </FormControl>
                         </div>
                         <p className='content-p'>
                              Algumas informações sobre sua empresa, logo a frente, informações para contato.
                         </p>
                         <div className='form-1'>
                              <MaskedInput
                                   type={item[0].inputType}
                                   mask={item[0].inputMask}
                                   placeholder={item[0].inputPlaceholder}
                                   name={item[0].inputName}
                                   required={item[0].required}
                                   minLength={item[0].inputMinLength}
                                   maxLength={item[0].inputMaxLength}
                              />
                              <MaskedInput
                                   type={item[1].inputType}
                                   mask={item[1].inputMask}
                                   placeholder={item[1].inputPlaceholder}
                                   name={item[1].inputName}
                                   required={item[1].required}
                                   minLength={item[1].inputMinLength}
                                   maxLength={item[1].inputMaxLength}
                              />
                              <FormControlLabel control={<Checkbox defaultChecked />} label="IE Isenta" value={ieIsenta} onChange={() => { lockIe() }} />
                              <MaskedInput
                                   type={item[3].inputType}
                                   mask={item[3].inputMask}
                                   placeholder={item[3].inputPlaceholder}
                                   name={item[3].inputName}
                                   disabled={inputState}
                                   value={inputValue}
                                   onChange={() => { handleUserInput() }}
                                   required={item[3].required}
                                   minLength={item[3].inputMinLength}
                                   maxLength={item[3].inputMaxLength}
                              />
                              <MaskedInput
                                   type={item[0].inputType}
                                   mask={item[0].inputMask}
                                   placeholder={item[0].inputPlaceholder}
                                   name={item[0].inputName}
                                   required={item[0].required}
                                   minLength={item[0].inputMinLength}
                                   maxLength={item[0].inputMaxLength}
                              />
                         </div>
                    </div>
                    <input id='filled-basic' type={'hidden'} name='callback_url_success' value="../painel/cadastro-sucesso.html" />

                    <div className="place-2">
                         <div className='form-2'>
                              {
                                   cadRepData.slice(5.13).map((item, index) => {
                                        return (
                                             <MaskedInput
                                                  key={index}
                                                  type={item.inputType}
                                                  mask={item.inputMask}
                                                  placeholder={item.inputPlaceholder}
                                                  name={item.inputName}
                                                  required={item.required}
                                                  minLength={item.inputMinLength}
                                                  maxLength={item.inputMaxLength}
                                             />
                                        )
                                   })
                              }
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