import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Enterpriseformcomponent from "./components/enterpriseformcomponent";
import FormsSchema from "./schemas/formsSchema";
import Biform01 from "./forms/complexformbiinformationcollection";
import LanguageSwitcher from "./components/languageswitcher";
import Header from "./components/header";
import Footer from "./components/footer";
import { useTranslation } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';
import './i18n/i18n';




const App = () => {
  const handleSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  return (
    <>
     
	 <Header />

      <main className="container" id="wb-cont" style={{ padding: '2rem' }}>
    
      
	   
       
         <Biform01 onSubmit={handleSubmit} />
      </main>

      <Footer />
	
    </>
  );
};


export default App;