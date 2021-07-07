import React from 'react';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import '../styles/App.scss';

function AboutUs() {
    
    const { t, i18n } = useTranslation();
    return (
        <div className="hellos">
            <h1>{t('hellos.2')}</h1>
        </div>
    )
}

export default AboutUs;