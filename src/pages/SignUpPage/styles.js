import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '5px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '90vh',
    width: '80%',    
  },
  content:{
    width: '98%',
  },
  actions: {
    width: '98%',
  } 
}));

export default useStyles;


