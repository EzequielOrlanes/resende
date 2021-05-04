import React from "react"
import PropTypes from "prop-types"
import {withStyles} from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import AppBar from "@material-ui/core/AppBar"
import Typography from "@material-ui/core/Typography"


const styles = {
    root: {
        flexGrow: 7,
    }
}

function Bar(props) {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <Typography variant="h6" color = "inherit">
                        Home
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

Bar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bar);