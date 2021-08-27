import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },

}));

const ITEMS = [{
  id: "0",
  name: "Nome do produto",
  price: "9.99",
}, {
  id: "1",
  name: "Nome do produto 2",
  price: "9.97",
}]

export default function ItemsList(items) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <Paper>
        {ITEMS.map((item, index) => (
          <React.Fragment key={index}>
            <Link to={`/products/${item.id}`}>
            <ListItem alignItems="flex-start">
              {<img src={"https://source.unsplash.com/random"} width={200} height={200} />}
              <ListItemText
                primary={item.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {item.price}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            </Link>            
            <Divider />
          </React.Fragment>
        ))}
      </Paper>
    </List>
  );
}