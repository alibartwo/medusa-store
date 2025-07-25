import Piwu from './assets/piwu.svg';
import Favicon from './assets/favicon.ico';
import tr from './extensions/translations/tr.json';

export default {
  config: {
    auth: {
      logo: Piwu,
    },
    menu: {
      logo: Piwu,
    },
    head: {
      favicon: Favicon,
    },
    locales: ['tr'],
    translations: {
      tr,
    }
  },
  bootstrap() {},
};