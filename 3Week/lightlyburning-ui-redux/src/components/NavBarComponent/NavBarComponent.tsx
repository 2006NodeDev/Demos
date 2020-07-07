import React, { FunctionComponent } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import {Link} from 'react-router-dom'
import { IState } from '../../reducers';
import { useSelector } from 'react-redux';

//this is an example of Jss - a more js way of doing css
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

//this is the skeleton
export const NavBarComponent: FunctionComponent<any> = (props) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);


    const currentUser = useSelector((state:IState)=>{
        return state.loginState.currentUser
    })

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    //we can programmatically build the menu items
    let menuItems = []
    //always have the login item
    menuItems.push(<MenuItem onClick={handleClose}><Link to='/login'>Login</Link></MenuItem>)
    if(currentUser){
        //if they are logged in, add the other items
        menuItems.push(<MenuItem onClick={handleClose}><Link to='/clicker'>Clicker</Link></MenuItem>,
        <MenuItem onClick={handleClose}><Link to='/first'>First</Link></MenuItem>,
        <MenuItem onClick={handleClose}><Link to='/title'>Title</Link></MenuItem>,
        <MenuItem onClick={handleClose}><Link to={`/profile/${(props.user)?props.user.userId : '0' }`}>My Profile</Link></MenuItem>)
    }
    if(currentUser && currentUser.role === 'Admin'){
        menuItems.push(<MenuItem onClick={handleClose}><Link to='/users'>All Users</Link></MenuItem>,)
    }


    return (
        <nav>


            <AppBar position="static">
                <Toolbar>
                    <IconButton onClick={handleClick} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Menu id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}>
                        {menuItems}
                    </Menu>
                    <Typography variant="h6" className={classes.title}>
                        LightlyBurning
                </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </nav>
    )
}