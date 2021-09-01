import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        margin: 2,
        flexDirection: 'column',
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
        }
    },
    button: {
        margin: 2,
        width: '100%',
        maxWidth: 150
    },
    list: {
        display: 'flex',
        flexDirection: 'row'
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    }
}));

export default useStyles;