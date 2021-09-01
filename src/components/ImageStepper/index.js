import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 250,
    maxWidth: 700,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
}));

export default function ImageStepper({ url, description }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        className={classes.img}
        src={url}
        alt={description}
      />      
    </div>
  );
}