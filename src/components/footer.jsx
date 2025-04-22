import React from 'react';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook

const Footer = () => {
  const { t, i18n } = useTranslation(); // useTranslation hook gives you access to translation functions

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng); // Change the language dynamically
  };

  return (
    <footer role="contentinfo" id="wb-info">
      <div className="landscape">
        <nav className="container wb-navcurr">
          <h2 className="wb-inv">{t('about_this_site')}</h2>
          <ul className="list-unstyled colcount-sm-2 colcount-md-3">
            <li>
              <a href="https://www.canada.ca/en/transparency/terms.html">{t('termsandconditions')}</a>
            </li>
            <li>
              <a href="https://www.canada.ca/en/transparency/privacy.html">{t('privacy')}</a>
            </li>
          </ul>
        </nav>

        <div className="brand">
          <div className="container">
            <div className="row">
              <div className="col-xs-6 col-sm-12 text-left">
                <a href="#wb-cont" aria-label={t('top_of_page')}>
                  {t('top_of_page')} <span className="glyphicon glyphicon-chevron-up"></span>
                </a>
              </div>
              <div className="col-xs-6 col-md-12 text-right">
                <img
                  src="https://www.canada.ca/etc/designs/canada/wet-boew/assets/wmms-blk.svg"
                  alt={t('gov_logo_alt')}
                />
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;