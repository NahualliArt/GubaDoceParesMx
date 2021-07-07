import React from 'react';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import '../styles/App.scss';

function Contact() {

    const { t, i18n } = useTranslation();

    return (
        <div className="hellos">
            <h1>{t('hellos.4')}</h1>
        </div>
    )
}

export default Contact;
