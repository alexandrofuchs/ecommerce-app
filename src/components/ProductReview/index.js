import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import GradeIcon from '@material-ui/icons/Grade';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'auto',
    padding: theme.spacing(0, 3),
  },
  paper: {
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

const message = `Muito ruim`;

export default function ProductReview({ reviews }) {

  const classes = useStyles();

  console.log(reviews)

  return (
    <div className={classes.root}>
      <h2>Avaliações</h2>
      {
        reviews ?
          reviews.map((review) => (
            <Paper className={classes.paper}>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <Avatar>{review.user.name[0]}</Avatar>
                </Grid>
                <Grid item xs zeroMinWidth>
                  <Typography noWrap>{review.description}</Typography>
                </Grid>
                <Grid item xs zeroMinWidth>
                  <Typography noWrap>Nota: {review.grade}</Typography>
                </Grid>
                <Grid item xs zeroMinWidth>
                  <Typography noWrap>Usuário: {review.user.name}</Typography>
                </Grid>
              </Grid>
            </Paper>
          )) : null}
    </div>
  );
}