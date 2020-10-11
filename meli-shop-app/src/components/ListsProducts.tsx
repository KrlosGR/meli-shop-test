import {
  Container,
  createStyles,
  Grid,
  Link,
  makeStyles,
  Paper,
  Theme,
  Typography
} from '@material-ui/core';
import { RouteComponentProps } from '@reach/router';
import React, { FC, useContext, useEffect, useState } from 'react'
import NumberFormat from 'react-number-format';
import { AppContext, IGlobalContext } from '../contexts/AppContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: '30px',
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 800,
      borderBottom: 'thin solid #eee',
      '&:first-child': {
        borderRadius: '4px 4px 0 0'
      },
      '&:last-child': {
        borderRadius: '0 0 4px 4px'
      }
    },
    image: {
      width: 160,
      height: 160,
      display: "block"
    },
    h2: {
      color: '#333',
      fontSize: '20px',
      fontWeight: 300,
      lineHeight: 1.3,
    },
    imgItem: {
      padding: '0 24px'
    },
    img: {
      height: '100%',
      width: '100%',
      objectFit: 'contain'

    },
  }),
);
    // boxShadow: '0 1px 2px 0 rgba(0,0,0,.12)',
const ListsProducts: FC<RouteComponentProps> = ({ location }) => {
  const classes = useStyles();
  const [delayed, setDelayed] = useState(true);
  const {
    state,
    fetchItems,
    getParameterByName,
    search,
    setSearch,
    searchQry }: IGlobalContext = useContext(AppContext)

  useEffect(() => {
    (async function fetchData() {
      if (location!.search && !search) {
        await fetchItems(getParameterByName('search', location!.search));
        setDelayed(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    (async function fetchData() {
      if (!search) return;
      await fetchItems(searchQry);
      setDelayed(false)
      setSearch(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <Container className={classes.root}>
      { delayed ? <h1>Cargando...</h1> : state.map((prod, i) => (
        <Paper key={i} className={classes.paper}>
          <Grid container spacing={2}>
            <Grid className={classes.imgItem}>
              <Link href="#" className={classes.image}>
                <img className={classes.img} alt="complex" src={prod.picture} />
              </Link>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Link href="#" underline="none">
                    <Typography gutterBottom variant="h2" classes={{
                      h2: classes.h2
                    }}>
                      {prod.title}
                    </Typography>
                  </Link>
                  <Typography variant="h5" gutterBottom>
                    <NumberFormat value={prod.price.amount} displayType={'text'} thousandSeparator={true} prefix={prod.price.currency === 'ARS' ? '$' : 'U$S'} />
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    ID: 1030114
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: 'pointer' }}>
                    Remove
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">{prod.condition}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Container>
  )
}

export default ListsProducts;
