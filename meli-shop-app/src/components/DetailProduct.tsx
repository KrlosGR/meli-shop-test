import React, { FC } from 'react';
import { RouteComponentProps, useParams } from '@reach/router';
import { Button, Container, Grid, Link, Paper, Typography } from '@material-ui/core';
import { useItemFetch } from '../hooks/useItemFetch';
import PlaceHolder from './PlaceHolder';
import { useListStyles } from '../styles/ListStyle';
import NumberFormat from 'react-number-format';
// import { AppContext, IGlobalContext } from '../contexts/AppContext';

const DetailProduct: FC<RouteComponentProps> = () => {
  const classes = useListStyles();
  const { idItem } = useParams()
  const [item, loading] = useItemFetch(idItem);

  return (
    <Container className={classes.root}>
      {
        loading ? <PlaceHolder /> : (
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid className={classes.imgItem}>
                <figure className={classes.image}>
                  <img className={classes.img} alt="complex" src={item!.picture} />
                </figure>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography variant="subtitle1">{item!.condition === 'new' ? 'Nuevo' : 'Usado'}</Typography>

                    <Typography gutterBottom variant="h2" classes={{ h2: classes.h2 }}>
                      {item!.title}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                      <NumberFormat value={item!.price.amount} displayType={'text'} thousandSeparator={true} prefix={item!.price.currency === 'ARS' ? '$' : 'U$S'} />
                    </Typography>
                    <Button size="large" variant="contained" color="primary">
                      Comprar
                    </Button>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" >
                      Descripción del producto
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {item!.description}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        )
      }
    </Container>
  )
}

export default DetailProduct;

