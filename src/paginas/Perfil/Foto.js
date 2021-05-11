import React from "react"
import PropTypes from "prop-types"
import {withStyles} from "@material-ui/core/styles"
import Fab from "@material-ui/core/Fab"

const styles = theme => ({
    fab: {
        position: "absolute",
    },
})

function Foto(props) {
    const {classes} = props
    return (
        <div>
            <Fab className={classes.fab}>
                <img src = "./imagem/capa-resende-costa.jpg"></img>
            </Fab>
        </div>
    )
}

fo.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles (styles)(Foto)