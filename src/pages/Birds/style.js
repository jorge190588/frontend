import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme=>({
    wrap: {
        margin: 50,
        '&:hover':{
            '& div':{
                '& div':{
                    transform: 'scale(2)'
                }
            }
       }
    },
    container: {
        display: 'inline-block',
        width: 150
    },
    h1: {
        color: 'lightgray',
        fontFamily: 'lato',
        fontSize: 20,
        fontWeight: 200,
        padding: 20,
        textAlign: 'center',
    },
    box:{
        borderRadius: '50%',
        height: 40,
        margin: '50px auto',
        width: 40,
        /* Individual efect */
        /* '&:hover': {
            transform: 'scale(2)'
        }*/
      },
    box1: {
        background: '#60D4C8',
        transition: 'all 300ms',
      },
      box2: {
        background: '#46BAAF',
        transition: 'all 1s',
      },
      box3: {
        background: '#3EA69B',
        transition: 'all 3s'
      }
      
}));