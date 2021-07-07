import React from 'react';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import '../styles/App.scss';

function Classes() {
    
    const { t, i18n } = useTranslation();
    return (
        <div className="hellos">
            <h1>{t('hellos.3')}</h1>
        </div>
    )
}

export default Classes;