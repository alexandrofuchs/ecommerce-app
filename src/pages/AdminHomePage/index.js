import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ProductForm from '../../components/ProductForm';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        flexDirection: 'column'        
    },   
    menu: {
        display: 'flex',
        flexDirection: 'row',
        '& > *': {
          margin: theme.spacing(1),
        },
      },
    drawer: {
        width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

export default function AdminHomePage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.menu}>
                <Button variant="contained">Produtos</Button>
                <Button variant="contained">Pedidos</Button>
                <Button variant="contained">Usuários</Button>
            </div>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <ProductForm/> 
                {/* <ProductList/>          */}
            </main>
        </div>
    );
}