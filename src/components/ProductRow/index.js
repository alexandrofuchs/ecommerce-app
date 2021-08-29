import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    //maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
  section2: {
    margin: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(3, 1, 1),
  },
}));

export default function ProductRow({ id, name, description, price }){

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.section1}>
        <Link to={`product/${id}`}>        
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4">
              {name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6">
              {price}
            </Typography>
          </Grid>
        </Grid>
        <Typography color="textSecondary" variant="body2">
          {description}
        </Typography>
        </Link>
      </div>
      <Divider variant="middle" />
      <div className={classes.section3}>
        <Button color="primary">Adicionar ao Carrinho</Button>
        
      </div>
      <Divider variant="middle" />
    </div>
  );
}
