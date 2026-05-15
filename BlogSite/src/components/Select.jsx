import React,{useId} from 'react'

function Select({
    options,
    label,
    className="",
    ...props
},ref) {
  // 🔴 FIX 1: Generate a unique ID using the React hook
    const id = useId();
  return (
  <div className='w-full'>
    {/* 🔴 FIX 2: Added {label} inside the tag so the text actually displays */}
            {label && (
                <label htmlFor={id} className='inline-block mb-1 pl-1 text-gray-700'>
                    {label}
                </label>
            )}
    <select {...props} id = {id} ref={ref} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}> 
    {options?.map((option)=>(
      <option key={option} value={option}>
        {option}
      </option>
    ))}

    </select>
  </div>

)

}

export default React.forwardRef(Select)