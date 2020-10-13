import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { Card, Grid } from '@material-ui/core';
import { useListStyles } from '../styles/ListStyle';

const PlaceHolder = () => {
  const classes = useListStyles();
  return (
    <>
      <Card className={classes.paper}>
        <Grid container>
          <Grid className={classes.imgItem}>
            <Skeleton classes={{ text: classes.text }} className={classes.image} animation="wave" />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" >
              <Skeleton height={40} />
              <Skeleton width="80%" height={20} />
              <Skeleton width="70%" height={20} />
            </Grid>
          </Grid>
        </Grid>
      </Card>
      <Card className={classes.paper}>
        <Grid container>
          <Grid className={classes.imgItem}>
            <Skeleton classes={{ text: classes.text }} className={classes.image} animation="wave" />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" >
              <Skeleton height={40} />
              <Skeleton width="80%" height={20} />
              <Skeleton width="70%" height={20} />
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}

export default PlaceHolder;