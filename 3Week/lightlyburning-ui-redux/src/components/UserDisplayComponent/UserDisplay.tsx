import React, { FunctionComponent } from 'react'
import { User } from '../../models/User'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'

interface IUserDisplayProps{
    user:User
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(20),
        height: theme.spacing(17),
      },
    },
    paper:{
        backgroundColor:'grey' 
    }
  }),
);




export const UserDisplayComponent:FunctionComponent<IUserDisplayProps> = (props)=>{
    let classes = useStyles()
    return(
        <div className={classes.root}>
            <Paper className={classes.paper}elevation={4}>
                <Typography variant='body1'>
                   Username : {props.user.username}
                </Typography>
                <Typography variant='body1'>
                   Email : {props.user.email}
                </Typography>
                <Typography variant='body1'>
                   Role : {props.user.role}
                </Typography>
                <Button variant='contained' color='inherit'>Edit</Button>
            </Paper>
        </div>
    )
}