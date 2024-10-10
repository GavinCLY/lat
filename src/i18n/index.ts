import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonEn from './locales/en/common.json'
import commonCn from './locales/cn/common.json'

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        lng: 'cn',
        resources: {
            en: {
                common: commonEn
            },
            cn: {
                common: commonCn
            }
        },
        fallbackLng: 'cn',

        interpolation: {
            escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },
    });
