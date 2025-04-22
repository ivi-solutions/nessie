import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import * as Checkbox from '@radix-ui/react-checkbox';
import * as Label from '@radix-ui/react-label';
import './forms.css'; 

const BiForm01 = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>{t("generaltipform")}</h2>

         <div className="form-group">
  <Label.Root htmlFor="priority" className="form-label">
    {t("priority")}
  </Label.Root>
  <select
    id="priority"
    name="priority"
    value={formData.priority}
    onChange={handleChange}
    required
    className="form-input"
  >
    <option value="">{t("selectpriority")}</option>
    <option value="Low">{t("low")}</option>
    <option value="Medium">{t("medium")}</option>
    <option value="High">{t("high")}</option>
	<option value="High">{t("urgent")}</option>
  </select>
</div>
		
		<div className="form-group">
          <Label.Root htmlFor="firstName" className="form-label">
            {t("firstName")}
          </Label.Root>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            placeholder={t("firstName")}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <Label.Root htmlFor="lastName" className="form-label">
            {t("lastName")}
          </Label.Root>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            placeholder={t("lastName")}
            required
            className="form-input"
          />
        </div>

       
       

  <div className="form-group">
  <Label.Root htmlFor="Description" className="form-label">
    {t("description")}
  </Label.Root>
  <textarea
    id="description"
    name="description"
    value={formData.message}
    onChange={handleChange}
    placeholder={t("description")}
    required
    className="form-input"
    rows={2} // You can adjust the number of lines
  />
</div>

 <div className="form-group">
          <Checkbox.Root
            checked={formData.acceptTerms}
            onCheckedChange={(checked) => handleChange({ target: { name: "acceptTerms", checked } })}
          >
            <Checkbox.Indicator className="checkbox-indicator">
              ✔
            </Checkbox.Indicator>
            <Label.Root className="form-label">
              {t("verifyinformation")}
            </Label.Root>
          </Checkbox.Root>
        </div>
      
      </form>
    </div>
  );
};

export default BiForm01;