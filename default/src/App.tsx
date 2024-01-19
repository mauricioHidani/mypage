import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Themes/GlobalStyle';
import Theme from './Themes/Theme';

import Presentation from './Components/Presentation/Presentation';
import MainProject from './Components/MainProject/MainProject';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <section>
        <Presentation />
        <MainProject />
      </section>
    </ThemeProvider>
  );
}

export default App;
