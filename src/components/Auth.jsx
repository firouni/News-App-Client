import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../store";
import { Box, Button, TextField, Typography } from "@mui/material";

const Auth = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({
        firstName:"",
        lastName:"",
        pseudo:"",
        address:"",
        email:"",
        password:"",
    })
    const [isSignup, setIsSignup] = useState(false);
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const sendRequest = async (/*type = "login"*/) => {
        const res = await axios
            .post("http://localhost:5002/api/users/login", {
                email: inputs.email,
                password: inputs.password,
            })
            .catch((err) => console.log(err));

        const data = await res.data;
        return data;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        if (isSignup) {
            sendRequest("signup")
            .then((data) => localStorage.setItem("userId", data.user._id))
            .then(() => dispatch(authActions.setLogin()))
            .then(() => navigate("/blogs"));
        } else {
            sendRequest()
            .then((data) => localStorage.setItem("userId", data.user._id))
            .then(() => dispatch(authActions.setLogin()))
            .then(() => navigate("/blogs"));
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} >
            <Box
                display="flex"
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                maxWidth={800}
                boxShadow="10px 10px 20px #ccc"
                padding={3}
                margin="auto"
                marginTop={5}
                borderRadius={5}
            >
                <Typography padding={3} textAlign="center" variant="h3">
                {isSignup ? "Signup" : "Login"}
                </Typography>
                {isSignup && <>
                    <TextField
                        name="firstName"
                        onChange={handleChange}
                        value={inputs.firstName}
                        placeholder="First Name"
                        margin="normal"
                    />
                    <TextField
                        name="lastName"
                        onChange={handleChange}
                        value={inputs.lastName}
                        placeholder="Last Name"
                        margin="normal"
                    />
                    <TextField
                        name="pseudo"
                        onChange={handleChange}
                        value={inputs.pseudo}
                        placeholder="Pseudo"
                        margin="normal"
                    />
                    <TextField
                        name="address"
                        onChange={handleChange}
                        value={inputs.address}
                        placeholder="Address"
                        margin="normal"
                    />
                </>}
                    {" "}
                <TextField
                    name="email"
                    onChange={handleChange}
                    value={inputs.email}
                    placeholder="Email"
                    margin="normal"
                />
                <TextField
                    name="password"
                    onChange={handleChange}
                    value={inputs.password}
                    type={"password"}
                    placeholder="Password"
                    margin="normal"
                />
                <Button
                    type='submit'
                    sx={{ borderRadius: 3, marginTop: 2 }}
                    variant="outlined"
                >
                Submit
                </Button>
                <Button
                    onClick={() => setIsSignup(!isSignup)}
                    sx={{ borderRadius: 3, marginTop: 2 }}
                >
                Change To {isSignup ? "Login" : "Signup"}
                </Button>
            </Box>
            </form>
        </div>
    );
}

export default Auth;