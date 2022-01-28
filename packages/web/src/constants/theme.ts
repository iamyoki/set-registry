import {rgba} from 'polished';

export const theme = {
  colors: {
    PRIMARY: '#6096CC',
    SECONDARY: '#8FA0B2',
    TEXT: '#2F434A',
    get blacks() {
      const base = '#09151C';
      return {
        base,
        90: rgba(base, 0.9),
        80: rgba(base, 0.8),
        70: rgba(base, 0.7),
        60: rgba(base, 0.6),
        50: rgba(base, 0.5),
        40: rgba(base, 0.4),
        30: rgba(base, 0.3),
        20: rgba(base, 0.2),
        10: rgba(base, 0.1),
        4: rgba(base, 0.04),
      };
    },
    get whites() {
      const base = '#FFFFFF';
      return {
        base,
        90: rgba(base, 0.9),
        80: rgba(base, 0.8),
        70: rgba(base, 0.7),
        60: rgba(base, 0.6),
        50: rgba(base, 0.5),
        40: rgba(base, 0.4),
        30: rgba(base, 0.3),
        20: rgba(base, 0.2),
        10: rgba(base, 0.1),
        4: rgba(base, 0.04),
      };
    },
  },
};
