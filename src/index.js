import React from 'react';
import { render } from 'react-dom';
import WebFontLoader from '@dr-kobros/react-webfont-loader';

import 'bootstrap3';
import 'bootstrap3/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './index.css';
import App from './components/App';

const config = {
    google: {
        families: ['Lato:300,400,300italic,400italic', 'Montserrat:400,700']
    }
}

const callback = status => {}

render(
    <WebFontLoader config={config} onStatus={callback}>
        <App />
    </WebFontLoader>,
    document.getElementById('root')
);
