import {css} from '@emotion/react';
import {normalize} from 'polished';

export const rebase = css`
  ${normalize()}

  html {
    line-height: 1.4;
    overflow: overlay;
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    font-family: PingFangSC, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  button,
  a {
    color: currentColor;
    text-decoration: none;
    border: none;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 0.4;
    }
  }
`;

// global layout style
export const layout = css`
  html,
  body,
  #root,
  #root > * {
    height: 100%;
  }
  .clearfix::after {
    content: '';
    width: 0;
    height: 0;
    clear: both;
  }
`;
