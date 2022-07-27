import './style.css'
import InputMask from 'react-input-mask'

const numberConvert = (str) => str.replace(/[^0-9]/g, '')

const MaskedInput = ({value, onChange, mask, name, placeholder, className, required, readOnly}) => {

     function handleChange(event) {
          onChange({
               ...event,
               target: {
                    ...event.target,
                    value: numberConvert(event.target.value)
               }
          })
     }

     return (
          <InputMask name={name} value={value} onChange={handleChange} className={className} mask={mask} placeholder={placeholder} required={required} readOnly={readOnly}/>
     );
}

export default MaskedInput;