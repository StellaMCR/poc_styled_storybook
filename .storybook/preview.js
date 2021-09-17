import { WithThemeProvider } from 'storybook-addon-styled-components-themes'
import { DefaultTheme } from '../src/config/Theme/defaultTheme';
import { Proj1Theme } from '../src/config/Theme/proj1Theme';
import {addDecorator, addParameters} from "@storybook/react"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addParameters({
  styledComponentsThemes: {
    /**
     * Themes
     */
    themes: [DefaultTheme, Proj1Theme],
    /**
     *  Key for show name of theme - optional
     */
    label: 'name', // optional
  },
});

addDecorator(story => (
  <WithThemeProvider>
      {story()}
  </WithThemeProvider>
))