import React from 'react'
import LockOpenIcon from '@material-ui/icons/LockOpen';
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div style={login}>
            <div style={loginContainer}>
                <LockOpenIcon color="secondary" style={{ fontSize: 50 }} />
                <h2>Sign In</h2>
                <form>
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
                    >Sign In</Button>
                    <p>Don't have an account? <Link to="/register">Register</Link></p>
                </form>
            </div>
        </div>
    )
}

const login = {
    height: "100vh",
    background: "#f8f8f8",
    display: "grid",
    placeItems: "center",
}
const loginContainer = {
    padding: "100px",
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 1px 3px #231233",
}
const textAreaStyle = {
    margin: "10px"
}

export default Login