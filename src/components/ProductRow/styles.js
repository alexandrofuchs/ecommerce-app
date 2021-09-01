import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '90%',
    margin: '2mm',
  },
  item:{
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  formControl: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  img: {
    flex: 1,
    height: '100%'
  },
}));

export default useStyles;
