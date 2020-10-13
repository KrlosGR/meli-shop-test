import React from 'react';
import { Card, Container, Grid, Typography } from '@material-ui/core';
import { ReactComponent as ErrorIcon } from "../statics/error.svg";
import { useErrorStyles } from '../styles/ErrorStyle';

const ErrorNoFound = () => {
  const classes = useErrorStyles()

  return (
    <Container>
      <Card className={classes.root}>
        <Grid container>
          <Grid className={classes.imgItem}>
            <ErrorIcon />
          </Grid>
          <Grid direction="row" item xs={12} sm container>
            <Typography gutterBottom variant="h3" classes={{ h3: classes.h3 }}>
              Escribí en el buscador lo que querés encontrar.
            </Typography>
            <Typography className={classes.ul} gutterBottom variant="body1" component="ul">
              <li className={classes.list}>
                <strong>Escribí tu búsqueda</strong> en el campo que figura en la parte superior de la pantalla.
              </li>
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Container>
  )
}

export default ErrorNoFound;