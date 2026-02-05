

const TextInput = ({ title, placeholder, type, value, name, onChange}) => {
    return (
        <>
            <div className="bg-transparent w-full h-auto my-2">
                <p className="text-sm font-medium">{title}</p>
                <input  
                name={name}
                 type={type}
                 value={value}
                 onChange={onChange}
                    placeholder={placeholder}
                    className="bg-white border-neutral-300 border text-xs font-normal rounded-md w-full h-11 mt-2 px-4
            focus:outline-1"/>
            </div>
        </>
    )
}

export default TextInput;