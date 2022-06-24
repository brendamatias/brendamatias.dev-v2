import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    html {
      scroll-behavior: smooth;
    }

    html,
    body {
      padding: 0;
      margin: 0;
      font-family: 'Poppins', sans-serif;
    }

    a {
      color: inherit;
      text-decoration: none;
      transition-property: background, color, border;
      transition-duration: 0.3s;
    }

    * {
      box-sizing: border-box;
      scroll-margin-top: 98px;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    button {
      border: 0;
      background-color: transparent;
      margin: 0;
      padding: 0;
      cursor: pointer;
      font-family: 'Poppins', sans-serif;
      transition: 0.3s;
    }

    .button {
      display: flex;
      align-items: center;
      gap: 8px;
      background-color: #ff335f;
      color: #fff;
      border: 0;
      border-radius: 0.64rem;
      font-size: 1rem;
      border-radius: 6px;
      padding: 0.5rem 2rem;
      border: 2px solid transparent;

      &:hover {
        color: #ff335f;
        background-color: #fff;
        border-color: #ff335f;
      }
    }

    label {
      font-size: 1rem;
      font-weight: 600;
    }

    input,
    textarea {
      width: 100%;
      border: 1px solid hsl(0, 0%, 84%);
      border-radius: 0.3rem;
      padding: 1rem;
      font-size: 1rem;
      margin: 0.5rem 0;

      &:focus {
        border-color: #fff0fc;
      }
    }

    input {
      height: 3.5rem;

      &:focus {
        border-color: #ff335f;
      }
    }

    textarea {
      resize: none;
      min-height: 9rem;
    }

    p {
      text-align: justify;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      padding: 0;
      margin: 0;
    }

    h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      h1 {
        font-size: 2.5rem !important;
      }

      h2 {
        font-size: 1.5rem !important;
      }
    }

    .main {
      position: relative;
    }

    .title-section {
      display: inline-block;
      position: relative;
      color: ${theme.colors.text};
      margin-bottom: 2rem;

      &::after {
        position: absolute;
        bottom: -8px;
        left: 0;
        content: '';
        width: 100%;
        height: 4px;
        border-radius: 99999px;
        background-color: #ff335f;
        transform: rotate(-1deg);
      }
    }
  `}
`;
