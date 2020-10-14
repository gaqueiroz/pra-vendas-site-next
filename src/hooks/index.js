import React from 'react';

import { ThemeProvider } from 'styled-components';

import { FormDataProvider } from './formData';
import { FormPropsProvider } from './formProps';
import theme from '../styles/theme';

function AppProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <FormPropsProvider>
        <FormDataProvider>{children}</FormDataProvider>
      </FormPropsProvider>
    </ThemeProvider>
  );
}

export default AppProvider;
