import React from 'react';
import { createHistory, Router } from '@reach/router';

import { AppContextProvider } from "./contexts/AppContext";
import Header from './components/Header'
import ListsProducts from './components/ListsProducts';
import DetailProduct from './components/DetailProduct';
import { Container, createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  props: {
    MuiPaper: {
      square: true
    },
    MuiContainer: {
      disableGutters: true
    }
  },
  typography: {
    fontFamily: [
      'Proxima Nova',
      '-apple-system',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#ededed',
        }
      },
    },
    MuiContainer: {
      root: {
        minHeight: 0,
        backgroundColor: '#ededed'
      }
    },
    MuiPaper: {
      elevation1: {
        boxShadow: '0 1px 2px 0 rgba(0,0,0,.12)',
      }
    }
  },
});

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContextProvider>
          <Header />
          <Container component="section">
            <Router>
              <ListsProducts path="/items" />
              <DetailProduct path="/items/:idProduct" />
            </Router>
          </Container>
        </AppContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
