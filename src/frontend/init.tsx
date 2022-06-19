import * as React from 'react';
import * as ReactDOM from 'react-dom';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { getBrowserLanguage, resources } from './langs';
import { App } from './App';
import { LOCALSTORAGE_KEY_LANG } from './const';

import 'xeltica-ui/dist/css/xeltica-ui.min.css';
import './style.scss';
import 'dayjs/locale/ja';

dayjs.extend(relativeTime);

if (!localStorage[LOCALSTORAGE_KEY_LANG]) {
	localStorage[LOCALSTORAGE_KEY_LANG] = getBrowserLanguage();
}

i18n
	.use(initReactI18next)
	.init({
		resources,
		lng: localStorage[LOCALSTORAGE_KEY_LANG],
		interpolation: {
			escapeValue: false // Reactは常にXSS対策をしてくれるので、i18next側では対応不要
		}
	});

ReactDOM.render(<App/>, document.getElementById('app'));
