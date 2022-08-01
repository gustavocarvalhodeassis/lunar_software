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
     defaultChecked
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
          return <ReactInputMask mask={mask} onChange={onChange} disabled={disabled} required={required} type={type} className={className} value={value} name={name} defaultChecked={defaultChecked} placeholder={placeholder} />
     } else {
          return <ReactInputMask mask={mask} onChange={() => { handleInputs }} value={value} disabled={disabled} required={required} type={type} className={className} value={value} name={name} defaultChecked={defaultChecked} placeholder={placeholder} />
     }
}

export default LunarInput;