import { future as theme } from 'mdx-deck/themes';

import style from 'react-syntax-highlighter/styles/prism/funky';
// import prismGraphQL from './prism-graphql';
import prismJSON from 'react-syntax-highlighter/languages/prism/json';
import prismTypeScript from 'react-syntax-highlighter/languages/prism/typescript';
import prismBash from 'react-syntax-highlighter/languages/prism/bash';

// #270088
// #f900af
// #757792
// #f7f8fa
// #323c5c

const colors = {
  background: '#f7f8fa',
  blue: '#0af',
  code: '#f900af',
  link: '#f900af',
  pre: '#f900af',
  accent: '#f900af',
  accentText: '#f7f8fa',
  preBackground: '#000',
  text: '#222',
};
export default {
  ...theme,
  transitionDuration: '.2s',
  prism: {
    style,
    languages: {
      // graphql: prismGraphQL,
      json: prismJSON,
      typescript: prismTypeScript,
      shell: prismBash,
    },
  },
  code: {
    letterSpacing: '0.1em',
    backgroundColor: colors.code,
    color: colors.accentText,
    padding: '0 4px',
  },
  h1: {
    ...theme.h1,
    backgroundColor: colors.accent,
    color: colors.accentText,
    padding: '8px',
  },
  h2: {
    ...theme.h2,
    padding: '8px',
    textDecoration: 'underline',
    textDecorationColor: colors.accent,
    textAlign: 'left',
  },
  blockquote: {
    borderLeft: `8px solid ${colors.accent}`,
    paddingLeft: '32px',
  },
  colors,
};

// Customize your presentation theme here.
//
// Read the docs for more info:
// https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
// https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md

// ..
// prism-coy.css	Correct typo (#1508)	3 months ago
// prism-dark.css	Remove direction-property from themes	3 years ago
// prism-funky.css	Remove direction-property from themes	3 years ago
// prism-okaidia.css	Add .token.class-name to rest of themes (#1360)	5 months ago
// prism-solarizedlight.css	Add .token.class-name to rest of themes (#1360)	5 months ago
// prism-tomorrow.css	Remove direction-property from themes	3 years ago
// prism-twilight.css	Remove unneeded prefixed CSS (#989)	2 years ago
// prism.css
