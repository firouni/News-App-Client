import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/index";
import axios from "axios";
import Dropzone from "react-dropzone";
import { Formik } from "formik";
import * as yup from "yup";
import {
  Box,Button,
  FormControl,
  InputLabel,
  NativeSelect,
  TextField,Typography,
  useMediaQuery,
} from "@mui/material";
//import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

//register schema
const registerSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  pseudo: yup.string().required("required"),
  age: yup.number(),
  CIN: yup.number(),
  address: yup.string().required("required"),
  government: yup.string(),
  picturePath: yup.string(),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

//login schema
const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

//initial values for login and registration
const initialValuesLogin = {
  email: "",
  password: "",
};

const initialValuesRegister = {
  firstName: "",
  lastName: "",
  pseudo: "",
  age: 0,
  CIN: 0,
  address: "",
  government: "",
  email: "",
  password: "",
  picturePath: "",
};

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [pageType, setPageType] = useState("login");
  //const { palette } = useTheme();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";

  const register = async (values, onSubmitProps) => {
    const savedUser = await axios.post(
      "http://localhost:5002/users/register",
      {...values}
    );
    onSubmitProps.resetForm();
    if (savedUser) {
      setPageType("login");
    }
  };

  const login = async (values, onSubmitProps) => {
    const loggedIn = await axios.post(
      "http://localhost:5002/users/login",
      {...values}
    );
    onSubmitProps.resetForm();
    if (loggedIn) {
      dispatch(
          authActions.setLogin({
              user: loggedIn.user,
              token: loggedIn.token,
          })
      );
      navigate("/blogs");
    }
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    if (isLogin) await login(values, onSubmitProps);
    if (isRegister) await register(values, onSubmitProps);
  };

  return (
    <>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Users
        </InputLabel>
        <NativeSelect
          defaultValue={20}
          inputProps={{
            name: "userType ",
            id: "uncontrolled-native",
          }}
        >
          <option>User</option>
          <option>Editor</option>
        </NativeSelect>
      </FormControl>

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
        validationSchema={isLogin ? loginSchema : registerSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
          resetForm,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              {isRegister && (
                <>
                  <TextField
                    label="First Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                    name="firstName"
                    error={
                      Boolean(touched.firstName) && Boolean(errors.firstName)
                    }
                    helperText={touched.firstName && errors.firstName}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    label="Last Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastName}
                    name="lastName"
                    error={
                      Boolean(touched.lastName) && Boolean(errors.lastName)
                    }
                    helperText={touched.lastName && errors.lastName}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    label="Pseudo Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.pseudo}
                    name="pseudo"
                    error={Boolean(touched.pseudo) && Boolean(errors.pseudo)}
                    helperText={touched.pseudo && errors.pseudo}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    label="Age"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.age}
                    name="age"
                    error={Boolean(touched.age) && Boolean(errors.age)}
                    helperText={touched.age && errors.age}
                    sx={{ gridColumn: "span 1" }}
                  />
                  <TextField
                    label="CIN"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.CIN}
                    name="CIN"
                    error={Boolean(touched.CIN) && Boolean(errors.CIN)}
                    helperText={touched.CIN && errors.CIN}
                    sx={{ gridColumn: "span 1" }}
                  />
                  <TextField
                    label="Address Location"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address}
                    name="address"
                    error={Boolean(touched.address) && Boolean(errors.address)}
                    helperText={touched.address && errors.address}
                    sx={{ gridColumn: "span 3" }}
                  />
                  <TextField
                    label="Government"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.government}
                    name="government"
                    error={
                      Boolean(touched.government) && Boolean(errors.government)
                    }
                    helperText={touched.government && errors.government}
                    sx={{ gridColumn: "span 1" }}
                  />

                  <Box
                    gridColumn="span 4"
                    border={"1px solid"}
                    borderRadius="5px"
                    p="1rem"
                  >
                    <Dropzone
                      acceptedFiles=".jpg,.jpeg,.png"
                      multiple={false}
                      onDrop={(acceptedFiles) =>
                        setFieldValue("picturePath", acceptedFiles[0])
                      }
                    >
                      {({ getRootProps, getInputProps }) => (
                        <Box
                          {...getRootProps()}
                          border={"2px dashed"}
                          p="1rem"
                          sx={{ "&:hover": { cursor: "pointer" } }}
                        >
                          <input {...getInputProps()} />
                          {!values.picturePath ? (
                            <p>Add Picture Here</p>
                          ) : (
                            <Typography>{values.picturePath.name}</Typography>
                          )}
                        </Box>
                      )}
                    </Dropzone>
                  </Box>
                </>
              )}

              <TextField
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={Boolean(touched.email) && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                label="Password"
                type="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={Boolean(touched.password) && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>

            {/* BUTTONS */}
            <Box>
              <Button
                fullWidth
                type="submit"
                sx={{
                  m: "2rem 0",
                  p: "1rem",
                  backgroundColor: "#00D5FA",
                  color: "#1A1A1A",
                  "&:hover": { color: "#00D5FA" },
                }}
              >
                {isLogin ? "LOGIN" : "REGISTER"}
              </Button>
              <Typography
                onClick={() => {
                  setPageType(isLogin ? "register" : "login");
                  resetForm();
                }}
                sx={{
                  textDecoration: "underline",
                  color: "#00D5FA",
                  "&:hover": {
                    cursor: "pointer",
                    color: "#00353F",
                  },
                }}
              >
                {isLogin
                  ? "Don't have an account? Sign Up here."
                  : "Already have an account? Login here."}
              </Typography>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Form;
