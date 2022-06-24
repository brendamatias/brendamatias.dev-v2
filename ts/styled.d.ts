import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primary_light: string;
      text: string;
      text_medium: string;
      text_light: string;
      white: string;
      shadow: string;

      background: {
        primary: string;
        secondary: string;
        tertiary: string;
        primary_light: string;
      };
    };
  }
}
