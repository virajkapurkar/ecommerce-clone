import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions.js";
import Spinner from "../components/shared/spinner.js";
import Message from "../components/shared/alert.js";
import { Link } from "@mui/material";

function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const redirect = location.search ? location.search.split("=") : "/";

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const dispatch = useDispatch();
  const { loading, error, userInfo } = useSelector(
    (state) => state.userRegister
  );

  useEffect(() => {
    if (userInfo) navigate(redirect);
  }, [userInfo, navigate, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch code
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(name, email, password));
    }
  };
  return (
    <>
      {loading && <Spinner />}
      <Card
        sx={{
          mx: "auto",
          my: "auto",
          paddingX: 4,
          paddingY: 2,
          display: "block",
          backgroundColor: "white",
          maxWidth: 400,
        }}
      >
        {error && <Message severity="error">{error}</Message>}
        {message && <Message severity="error">{message}</Message>}
        <Typography
          variant="body1"
          component="h3"
          sx={{ fontSize: 28, marginBottom: 2 }}
        >
          Create Account
        </Typography>
        <form onSubmit={submitHandler}>
          <Typography
            variant="div"
            component="h5"
            sx={{
              fontWeight: 700,
              fontSize: 14,
              marginTop: 2,
            }}
          >
            Your Name
          </Typography>
          <TextField
            fullWidth
            id="name"
            type="text"
            variant="outlined"
            onChange={handleName}
            value={name}
            size="small"
            sx={{ marginTop: 1 }}
            placeholder="First and last name"
          />
          <Typography
            variant="div"
            component="h5"
            sx={{
              fontWeight: 700,
              fontSize: 14,
              marginTop: 2,
            }}
          >
            Email
          </Typography>
          <TextField
            fullWidth
            id="email"
            type="email"
            variant="outlined"
            onChange={handleEmail}
            value={email}
            size="small"
            sx={{ marginTop: 1 }}
            placeholder="Email"
          />
          <Typography
            variant="div"
            component="h5"
            sx={{
              fontWeight: 700,
              fontSize: 14,
              marginTop: 2,
            }}
          >
            Password
          </Typography>
          <TextField
            fullWidth
            id="password"
            type="password"
            variant="outlined"
            onChange={handlePassword}
            value={password}
            size="small"
            sx={{ marginBottom: 2, marginTop: 1 }}
            placeholder="Enter Password"
          />
          <Typography
            variant="div"
            component="h5"
            sx={{
              fontWeight: 700,
              fontSize: 14,
              marginTop: 2,
            }}
          >
            Confirm Password
          </Typography>
          <TextField
            fullWidth
            id="confirm-password"
            type="password"
            variant="outlined"
            onChange={handleConfirmPassword}
            value={confirmPassword}
            size="small"
            sx={{ marginBottom: 2, marginTop: 1 }}
            placeholder="Re-enter Password"
          />
          <Button
            fullWidth
            sx={{
              marginY: 1.5,
              padding: 1,
              backgroundColor: "#f0c14b",
              "&:hover": { backgroundColor: "#e8b22a" },
            }}
            variant="contained"
            size="small"
            type="submit"
          >
            <Typography
              color="black"
              variant="h4"
              component="h5"
              sx={{
                fontSize: 14,
                textTransform: "none",
              }}
            >
              Register
            </Typography>
          </Button>
        </form>

        <Divider sx={{ marginTop: 2 }}>
          <Typography
            color="gray"
            variant="h4"
            component="h5"
            sx={{
              fontSize: 14,
              textTransform: "none",
            }}
          >
            Already have an account?
          </Typography>
        </Divider>

        <Link
          sx={{ textDecoration: "none" }}
          href={redirect ? `login?redirect=${redirect}` : "/login"}
        >
          <Button
            fullWidth
            sx={{
              marginY: 1.5,
              padding: 1,
              backgroundColor: "#e7e9ec",
              "&:hover": { backgroundColor: "#c6c6c7" },
            }}
            variant="contained"
            size="small"
            type="submit"
          >
            <Typography
              color="black"
              variant="h4"
              component="h5"
              sx={{
                fontSize: 14,
                textTransform: "none",
              }}
            >
              Sign in
            </Typography>
          </Button>
        </Link>
      </Card>
    </>
  );
}

export default Register;
