import React from "react"
import PropTypes from "prop-types"
import {withStyles} from "@material-ui/core/styles"
import Fab from "@material-ui/core/Fab"
import AddIcon from "@material-ui/icons/Add"

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
            <Fab color="primary" arial-label="Add" className={classes.fab}>
                <AddIcon/>
            </Fab>
        </div>
    )
}

AddButon.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles (styles)(AddButon)