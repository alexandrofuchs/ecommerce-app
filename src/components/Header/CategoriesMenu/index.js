import React, { useEffect, useState } from 'react';
import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Api from '../../../services/api';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function CategoriesMenu() {
  const classes = useStyles();
  const [state, setState] = useState(false);

  const toggleDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(!state);
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await Api.get('/categories');
      if (res.data) {
        console.log(res.data)
        setCategories(res.data.data);
      }
    }
    fetchData();
  }, [])

  return (
    <>
      <Button onClick={toggleDrawer}>Categorias</Button>
      <Drawer open={state} onClose={toggleDrawer}>
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            {['Eletronicos', 'Informatica', 'Cozinha', 'Lazer'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
}
