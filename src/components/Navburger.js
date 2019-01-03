import React from 'react';
import Menu from '@material-ui/core/Menu';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Navburger = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                -- TODO: will become Navburger -- 🍔
                {/* https://material-ui.com/demos/menus/#simple-menu */}
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default Navburger;
