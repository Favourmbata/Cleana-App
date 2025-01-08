import React from 'react';

const TextArea = ({ title, description, placeholder, onChange }) => {
  return (
    <div className="my-4">
      <h6 className="mb-3">{title}</h6>
      {description && <span>{description}</span>}
      <textarea
        required
        name="message"
        id="message"
        rows="4"
        placeholder={placeholder}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default TextArea;