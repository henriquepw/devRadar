import { lighten } from 'polished';

const primaryColor = {
  bg: '#232427',
  text: '#F9F9F9',
  active: '#ffa45c',
};

const secundaryColor = {
  bg: lighten(0.05, primaryColor.bg),
  text: '#999',
};

export { primaryColor, secundaryColor };
