import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import en from './en';
import jp from './jp';
import ko from './ko';

i18n.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		lng: 'en',
		fallbackLng: 'en',

		resources: {
			en: en,
			jp: jp,
			ko: ko,
		},

		react: {
			defaultTransParent: 'div',
			transSupportBasicHtmlNodes: true,
			transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
		},
	});

export default i18n;
