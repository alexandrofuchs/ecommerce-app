import React, { useEffect, useState } from 'react';
import {
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Api from '../../services/api';
import { useApp } from '../../contexts/AppContext';

const useStyles = makeStyles({
  header: {
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    justifyContent: 'center'
  },
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

  const { category, setCategory } = useApp();
  const [categories, setCategories] = useState(null);

  const handleCategory = (event) => {
    setCategory(event.target.parentNode.id);
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await Api.get('/categories');
      console.log(res.data)
      if (res.data) {
        setCategories(res.data);
      }
    }
    fetchData();
  }, [])

  return (
    <>
      <Button onClick={toggleDrawer}>Categorias</Button>
      <Drawer open={state} onClose={toggleDrawer} anchor={'left'}>
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <div className={classes.header}>
            <Typography className={classes.title} variant="h4">Categorias</Typography>
          </div>
          
          <Divider/>
          { categories ? 
            (<List>
            {categories.map((cat) => (
              <ListItem button key={cat.id} id={cat.id} >
                <ListItemText id={cat.description} primary={cat.description} onClick={handleCategory}/>
              </ListItem>
            ))}
          </List>) : null       
        
          }
  
        </div>
      </Drawer>
    </>
  );
}
