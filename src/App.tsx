import React from 'react';
import Presentation from './Components/Presentation/Presentation';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Themes/GlobalStyle';
import Theme from './Themes/Theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <section>
        <Presentation />
      </section>
    </ThemeProvider>
  );
}

export default App;
