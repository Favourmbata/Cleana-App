import React from 'react'

const Input = ({ onChange, value, type, placeholder, name, id, className, maxLength, description, ...props }) => {
  return (
    <div className={className}>
      {description && (
        <div className='my-2' style={{fontSize: "13px", fontWeight: "500"}}>{description}</div>
      )}
      <input maxLength={maxLength} required type={type} value={value} onChange={onChange} placeholder={placeholder} name={name} id={id} {...props} />
    </div>
  )
}

export default Input;