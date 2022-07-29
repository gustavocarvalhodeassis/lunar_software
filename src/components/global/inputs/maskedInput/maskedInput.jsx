import TextField from '@mui/material/TextField'
import InputMask from 'react-input-mask'


const MaskedInput = ({
     mask,
     name,
     placeholder,
     required,
     maxLength,
     minLength,
     disabled
}) => {

     return (
          <InputMask mask={mask} disabled={disabled} maskChar={''}>
               {
                    () =>
                         <TextField
                              className={'input-grid'}
                              name={name}
                              disabled={disabled}
                              label={placeholder}
                              variant="filled"
                              placeholder={placeholder}
                              required={required}
                              maxLength={maxLength}
                              minLength={minLength}
                         />
               }
          </InputMask>
     );
}

export default MaskedInput;