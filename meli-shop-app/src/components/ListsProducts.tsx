import React, { FC, useContext, useEffect, useState } from 'react'
import { navigate, RouteComponentProps } from '@reach/router';
import NumberFormat from 'react-number-format';
import {
  Container,
  Grid,
  Link,
  Paper,
  Typography,
  withStyles
} from '@material-ui/core';
import { Grade as GradeIcon } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import { AppContext, IGlobalContext } from '../contexts/AppContext';
import PlaceHolder from "./PlaceHolder";
import { useListStyles } from '../styles/ListStyle';
import ErrorNoFound from "./ErrorNoFound";

const StyledRating = withStyles({
  iconFilled: {
    color: '#3483fa',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);

const ListsProducts: FC<RouteComponentProps> = ({ location }) => {
  const classes = useListStyles();
  const [delayed, setDelayed] = useState(true);
  const {
    state,
    loading,
    fetchItems,
    getParameterByName,
    search,
    setSearch,
    searchQry }: IGlobalContext = useContext(AppContext)

  function randomFloat(min: number, max: number): number {
    return min + (max - min) * Math.random();
  }

  const goDatail = (idItem: string, evt: MouseEvent) => {
    evt.preventDefault();
    if (!idItem) return;
    navigate(`/items/${idItem}`);
  }

  useEffect(() => {
    (async function fetchData() {
      if (location!.search && !search) {
        setDelayed(true);
        await fetchItems(getParameterByName('search', location!.search));
        setDelayed(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    (async function fetchData() {
      if (!search) return;
      setDelayed(true);
      await fetchItems(searchQry);
      setSearch(false);
      setDelayed(false)
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  if (state.length < 1) return (<ErrorNoFound />);

  return (
    <Container className={classes.root}>
      { delayed ? <PlaceHolder /> : state.map((prod, i) => (
        <Paper key={i} className={classes.paper}>
          <Grid container spacing={2}>
            <Grid className={classes.imgItem}>
              <Link href="#" onClick={(e) => goDatail(prod.id, e)} className={classes.image}>
                <img className={classes.img} alt="complex" src={prod.picture} />
              </Link>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Link href="#" onClick={(e) => goDatail(prod.id, e)} underline="none">
                    <Typography gutterBottom variant="h2" classes={{ h2: classes.h2 }}>
                      {prod.title}
                    </Typography>
                  </Link>
                  <Typography variant="h5" gutterBottom>
                    <NumberFormat value={prod.price.amount} displayType={'text'} thousandSeparator={true} prefix={prod.price.currency === 'ARS' ? '$' : 'U$S'} />
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {prod.id}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <StyledRating 
                  icon={<GradeIcon fontSize="inherit" />} 
                  size="small" 
                  precision={0.5} 
                  name="read-only" 
                  value={randomFloat(0, 5)} 
                  readOnly />
                <Typography variant="subtitle1" align="right">{prod.condition}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Container>
  )
}

export default ListsProducts;
