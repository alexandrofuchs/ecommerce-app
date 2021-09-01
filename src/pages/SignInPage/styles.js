import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'center'
  },
  main: {
    minWidth: "600px",
    textAlign: "center",
    justifyContent: "center",
  },
  submit: {
    color: "gray",
  }
}));

export default useStyles;


