import Picker from './src/components/Picker';
import {
  DROPDOWN_DIRECTION,
  LANGUAGE,
  LIST_MODE,
  MODE,
  TRANSLATIONS,
} from './src/constants';
import THEMES from './src/themes';

Picker.MODE = MODE;
Picker.setMode = (mode) => {
  Picker.MODE.DEFAULT = mode;
};

Picker.LIST_MODE = LIST_MODE;
Picker.setListMode = (mode) => {
  Picker.LIST_MODE.DEFAULT = mode;
};

Picker.DROPDOWN_DIRECTION = DROPDOWN_DIRECTION;
Picker.setDropDownDirection = (direction) => {
  Picker.DROPDOWN_DIRECTION.DEFAULT = direction;
};

Picker.LANGUAGE = LANGUAGE;
Picker.setLanguage = (language) => {
  LANGUAGE.DEFAULT = language;
};

Picker.addTranslation = (language, translation) => {
  TRANSLATIONS[language] = translation;
};

Picker.modifyTranslation = (language, translation) => {
  if (Object.prototype.hasOwnProperty.call(TRANSLATIONS,language)) {
    TRANSLATIONS[language] = { ...TRANSLATIONS[language], ...translation };
  }
};

Picker.THEMES = THEMES;
Picker.setTheme = (name) => {
  Picker.THEMES.DEFAULT = name;
};
Picker.addTheme = (name, theme) => {
  Picker.THEMES[name] = theme;
};

export default Picker;
