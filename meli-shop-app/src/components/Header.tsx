import { navigate } from '@reach/router';
import React, { FormEvent, MouseEvent, useContext, useRef } from 'react';
import { AppContext, IGlobalContext } from "../contexts/AppContext";

import { Container, Link, Toolbar, AppBar, InputBase } from '@material-ui/core';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: '0 0 0 160px',
      background: 'linear-gradient(45deg, #f2f321 30%, #f3f121 90%)',
    },
    topbar: {
      backgroundColor: 'transparent',
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },

    logo: {
      backgroundRepeat: 'no-repeat',
      overflow: 'hidden',
      textIndent: '-999px',
      position: 'absolute',
      left: 10,
      outline: 0,
      backgroundImage: "url(https://http2.mlstatic.com/frontend-assets/ui-navigation/5.10.3/mercadolibre/logo__large_plus.png)",
      height: '34px',
      marginRight: '20px',
      top: '15px',
      width: '140px'
    },

    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.75),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.95),
      },
      color: theme.palette.grey[900],
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        // marginLeft: theme.spacing(1),
        // marginRight: theme.spacing(5),
        // width: '85%'
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      color: 'grey',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      width: '100%'
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        // width: '20ch',
        // '&:focus': {
        //   width: '50ch',
        // },
      },
    }
  }),
);

const Header = () => {
  const classes = useStyles();
  const inputRef = useRef<HTMLInputElement>(null);
  const { searchQry, setSearchQry, setSearch }: IGlobalContext = useContext(AppContext)

  const gotoHome = async (evt: MouseEvent) => {
    evt.preventDefault();
    inputRef.current?.focus();
    setSearchQry('');
    await navigate(`/`);
    
  };

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    if (!searchQry) return;
    setSearch(true);
    navigate(`/items?search=${searchQry}`);
  };



  return (
    <Container component="header" className={classes.root}>
        <Link className={classes.logo} href="#" onClick={gotoHome}>
          Mercado Libre Clone Argentina - Donde comprar y vender de todo de mentira
          </Link>
      <AppBar className={classes.topbar} elevation={0} position="static" component="form" onSubmit={handleSubmit}>
        <Toolbar>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              inputRef={inputRef}
              placeholder="Nunca dejes de buscar..."
              onChange={evt => setSearchQry(evt.target.value)}
              value={searchQry}
              autoFocus={true}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'busqueda' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default Header;