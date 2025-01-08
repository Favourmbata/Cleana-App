import React from 'react';

const SelectInput = ({ 
  title, 
  options, 
  onChange, 
  description, 
  before_select, 
  className, 
  name, 
  value 
}) => {
  return (
    <div className="mt-5 my-3">
      {title && <h6>{title}</h6>}
      {description && <span>{description}</span>}
    
      <div className={`col-12 ${className}`}>
        <select
          required
          name={name}
          id={name}
          value={value}
          onChange={(e) => onChange(e)}
          className="form-control"
        >
          <option value="">{before_select}</option>
          {options?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectInput;
