import React, { useState } from "react";

const enterpriseformcomponent = ({ formSchema, onSubmit }) => {
  const [formData, setFormData] = useState(
    formSchema.fields.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {})
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{formSchema.formTitle}</h2>
      {formSchema.fields.map((field) => (
        <div key={field.name} className="form-group">
          <label htmlFor={field.name}>{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            id={field.name}
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChange={handleChange}
            required={field.required}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default enterpriseformcomponent;