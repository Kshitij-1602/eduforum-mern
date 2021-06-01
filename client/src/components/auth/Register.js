import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div style={register}>
            <div style={registerContainer}>
                <AccountCircleIcon color="secondary" style={{ fontSize: 50 }} />
                <h2>Register</h2>
                <form>
                    <TextField
                        style={textAreaStyle}
                        name="name"
                        variant="outlined"
                        label="Your Name"
                        type="text"
                        fullWidth
                        required
                    />
                    <TextField
                        style={textAreaStyle}
                        name="email"
                        variant="outlined"
                        label="Email Address"
                        type="email"
                        fullWidth
                        required
                    />
                    <TextField
                        style={textAreaStyle}
                        name="password"
                        variant="outlined"
                        label="Password"
                        type="password"
                        fullWidth
                        required
                    />
                    <Button
                        type="submit"
                        size="large"
                        variant="contained"
                        color="primary"
                    >Register</Button>
                    <p>Already have an account? <Link to="/login">Sign In</Link></p>
                </form>
            </div>
        </div>
    )
}

const register = {
    height: "100vh",
    background: "#f8f8f8",
    display: "grid",
    placeItems: "center",
}
const registerContainer = {
    padding: "100px",
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 1px 3px #231233",
}
const textAreaStyle = {
    margin: "10px"
}

export default Register