import React from "react"
import PropTypes from "prop-types"
import {withStyles} from "@material-ui/core/styles"
import Fab from "@material-ui/core/Fab"
import {MdHome} from "react-icons/md";
import { Button} from "react-bootstrap"
import {Link} from "react-router-dom";

const styles = theme => ({
    fab: {
        position: "absolute",
        bottom: theme.spacing.unit * 3,
        right: theme.spacing.unit * 3,
    },
})

function AddButon(props) {
    const {classes} = props
    return (
        <div>
            <Fab color="default" arial-label="Home" className={classes.fab}>
            <Button variant="inherit">
        <Link to="home"><MdHome/></Link></Button>  
            </Fab>
        </div>
    )
}

AddButon.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles (styles)(AddButon)