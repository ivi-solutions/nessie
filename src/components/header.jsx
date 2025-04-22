import React from 'react';
import { useTranslation } from 'react-i18next';
import './header.css';

const header = () => {
  const { i18n, t } = useTranslation();

  const toggleLang = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <header role="banner">
      {/* Top Banner with Government of Canada Wordmark */}
      <div className="gc-topbar">
        <div className="container d-flex justify-between align-center">
          <div className="gc-logo">
            <a href="https://www.canada.ca">
              <img
                src={`https://www.canada.ca/etc/designs/canada/wet-boew/assets/sig-blk-${i18n.language}.svg`}
                alt={
                  i18n.language === 'fr'
                    ? 'Gouvernement du Canada'
                    : 'Government of Canada'
                }
                className="gc-wordmark"
              />
            </a>
          </div>
          <div className="gc-lang">
            <button onClick={toggleLang} className="gc-lang-btn">
              {i18n.language === 'en' ? 'Français' : 'English'}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="gc-navbar" role="navigation" aria-label="Main navigation">
        <ul className="gc-nav-list container">
          <li><a href="#home">{t('home')}</a></li>
          <li><a href="#services">{t('Services')}</a></li>
          <li><a href="#departments">{t('departments')}</a></li>
		  <li><a href="https://www.canada.ca/en/contact.html">{t('contactus')}</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default header;