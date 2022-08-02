import ReactInputMask from "react-input-mask";

const removeChar = (str) => str.replace(/[^0-9]/g, '')

const LunarInput = ({
     name,
     required,
     className,
     disabled,
     placeholder,
     mask,
     type,
     onChange,
     value,
     defaultChecked,
     minLength,
     maxLength
}) => {

     const handleInputs = event => {
          onChange({
               ...event,
               target: {
                    ...event.target,
                    value: removeChar(event.target.value)
               }
          })
     }
     if (onChange) {
          return <ReactInputMask
               mask={mask}
               onChange={onChange}
               disabled={disabled}
               required={required}
               type={type}
               className={className}
               value={value}
               name={name}
               defaultChecked={defaultChecked}
               placeholder={placeholder}
               minLength={minLength}
               maxLength={maxLength}
          />
     } else {
          return <ReactInputMask
               mask={mask}
               onChange={() => { handleInputs }}
               value={value}
               disabled={disabled}
               required={required}
               type={type}
               className={className}
               name={name}
               defaultChecked={defaultChecked}
               minLength={minLength}
               maxLength={maxLength}
               placeholder={placeholder} />
     }
}

export default LunarInput;