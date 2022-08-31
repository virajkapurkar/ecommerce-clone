import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions.js";
import Spinner from "../components/shared/spinner.js";
import Message from "../components/shared/alert.js";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const redirect = location.search ? location.search.split("=") : "/";

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRedirect = (e) => {
    const link = redirect ? `/register?redirect=${redirect}` : "/register";
    navigate(link);
  };

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  useEffect(() => {
    if (userInfo) navigate(redirect);
  }, [userInfo, navigate, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch code
    dispatch(login(email, password));
  };
  return (
    <>
      {loading && <Spinner />}
      <Card
        sx={{
          mx: "auto",
          marginTop: 5,
          paddingX: 4,
          paddingY: 2,
          display: "block",
          backgroundColor: "white",
          maxWidth: 400,
        }}
      >
        {error && <Message severity="error">{error}</Message>}
        <Typography
          variant="body1"
          component="h3"
          sx={{ fontSize: 28, marginBottom: 2 }}
        >
          Sign-In
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
              Sign-In
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
            New to Ecommerce?
          </Typography>
        </Divider>

        <Button
          fullWidth
          onClick={handleRedirect}
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
            Create your Ecommerce account
          </Typography>
        </Button>
      </Card>
    </>
  );
}

export default Login;
