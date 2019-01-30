import React from 'react';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'


const Navburger = (props) => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
            <Typography style={{ flexGrow: 1 }} component="title" variant="h3" color='inherit'>
              don't die :)
            </Typography>
                <Button onClick={props.addProfile} color="inherit" variant="outlined" size="small" style={{margin: 5}}>Add Profile</Button>
                <Button color="inherit" variant="outlined" size="small" style={{margin: 5}}>Delete Profile</Button>
                <Button onClick={props.logout} color="inherit" variant="outlined" size="small" style={{margin: 5}}>Logout</Button>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default Navburger;
