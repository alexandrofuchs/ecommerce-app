import { 
    makeStyles,
} from '@material-ui/core';

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
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),        
    },
    button: {
        margin: '2mm',
    }
}));

export default useStyles;