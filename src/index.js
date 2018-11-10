import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import WebFontLoader from '@dr-kobros/react-webfont-loader';

import 'bootstrap3';
import 'bootstrap3/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './index.css';
import App from './components/App';

import en from 'react-intl/locale-data/en';
import ko from 'react-intl/locale-data/ko';
import locale from './locale';

const config = {
    google: {
        families: ['Lato:300,400,300italic,400italic', 'Montserrat:400,700']
    }
}

addLocaleData([...en, ...ko]);

const callback = status => {}
const defaultLang = localStorage.getItem('lang') || 'en';

render(
    <BrowserRouter>
        <WebFontLoader config={config} onStatus={callback}>
            <IntlProvider locale={defaultLang} messages={locale[defaultLang]}>
                <App />
            </IntlProvider>
        </WebFontLoader>
    </BrowserRouter>,
    document.getElementById('root')
);
