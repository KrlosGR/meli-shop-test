import React from 'react';
import { createHistory, Router } from '@reach/router';

import { AppContextProvider } from "./contexts/AppContext";
import Header from './components/Header'
import ListsProducts from './components/ListsProducts';
import { Container, CssBaseline, ThemeProvider } from '@material-ui/core';
import DetailProduct from './components/DetailProduct';
import { theme } from "./styles/GlobalStyle";

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContextProvider>
          <Header />
          <Container component="section">
            <Router>
              <ListsProducts path="items" />
              <DetailProduct path="items/:idItem" />
            </Router>
          </Container>
        </AppContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
