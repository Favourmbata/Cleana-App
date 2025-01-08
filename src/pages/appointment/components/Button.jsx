import React from 'react';
import { FaCheck } from 'react-icons/fa';

const ButtonGroup = ({ title, description, options, selected, onSelect }) => {
  return (
    <div className="my-4">
      <h6 className="mb-3">{title}</h6>
      {description && <span>{description}</span>}
      <div className="row">
        {options?.map((option, index) => (
          <div className="col-12 col-md-6 mb-3" key={index}>
            <button
            className={`btn btn-block btn-frequency w-100 d-flex justify-content-between align-items-center 
              ${Array.isArray(selected) ? (selected.includes(option) ? 'selected' : '') : (selected === option ? 'selected' : '')}`}
              
              // className={`btn btn-block btn-frequency w-100 d-flex justify-content-between align-items-center 
              // ${selected === option ? 'selected' : ''}`}
              onClick={() => onSelect(option)}
            >
              <span>{option}</span>
              {selected === option && <FaCheck className="text-danger" />}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ButtonGroup;