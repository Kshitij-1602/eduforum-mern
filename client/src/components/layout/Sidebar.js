import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import PersonIcon from "@material-ui/icons/Person";
import GavelIcon from "@material-ui/icons/Gavel";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AddBoxIcon from "@material-ui/icons/AddBox";
import BallotIcon from "@material-ui/icons/Ballot";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HomeIcon from "@material-ui/icons/Home";
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'

function Sidebar({ logout }) {
    return (
        // <div style={sidebarStyle}>
        <div>
            <Paper className="sidebar">
                <List>
                    <ListItem button component={Link} to="/profile">
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItem>
                    <ListItem button component={Link} to="/home">
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button component={Link} to="/posts">
                        <ListItemIcon>
                            <BallotIcon />
                        </ListItemIcon>
                        <ListItemText primary="Posted" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <GavelIcon />
                        </ListItemIcon>
                        <ListItemText primary="Rules" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <AssignmentIcon />
                        </ListItemIcon>
                        <ListItemText primary="Wiki" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <AddBoxIcon />
                        </ListItemIcon>
                        <ListItemText primary="New Board" />
                    </ListItem>
                    <ListItem button onClick={logout}>
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sign Out" />
                    </ListItem>
                </List>
            </Paper>
        </div>
    );
}

const sidebarStyle = {
    margin: "10px",
    height: "100%",
};

Sidebar.propTypes = {
    logout: PropTypes.func.isRequired
}
export default connect(null, { logout })(Sidebar);