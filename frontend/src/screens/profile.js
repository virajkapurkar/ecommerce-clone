import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import { Grid, Typography, Link } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, updateUserProfile } from "../actions/userActions.js";
import Spinner from "../components/shared/spinner.js";
import Message from "../components/shared/alert.js";
import { listMyOrders } from "../actions/orderActions.js";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  //const location = useLocation();

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
  const { loading, error, user } = useSelector((state) => state.userDetails);
  const { userInfo } = useSelector((state) => state.userLogin);
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;
  const orderList = useSelector((state) => state.orderMyList);
  const { loading: loadingOrders, orders, error: errorOrders } = orderList;

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetails("profile"));
        dispatch(listMyOrders());
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [userInfo, navigate, user, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch code
    dispatch(
      updateUserProfile({
        id: user._id,
        name,
        email,
        password,
      })
    );
  };
  return (
    <>
      {loading && <Spinner />}
      <Grid container spacing={1} marginTop={2} justifyContent="space-between">
        <Grid item md={4} xs={12}>
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
            {success && (
              <Message severity="success">Profile updated successfully</Message>
            )}
            <Typography
              variant="body1"
              component="h3"
              sx={{ fontSize: 28, marginBottom: 2 }}
            >
              Update Details
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
                  Update
                </Typography>
              </Button>
            </form>
          </Card>
        </Grid>
        <Grid item md={8} xs={12}>
          <Card
            sx={{
              mx: "auto",
              my: "auto",
              paddingX: 4,
              paddingY: 2,
              display: "block",
              backgroundColor: "white",
            }}
          >
            {loadingOrders ? (
              <Spinner />
            ) : errorOrders ? (
              <Message severity="error">errorOrders</Message>
            ) : (
              <>
                <Typography
                  variant="body1"
                  component="h3"
                  sx={{ fontSize: 28, marginBottom: 2 }}
                >
                  My Orders
                </Typography>

                <TableContainer>
                  <Table aria-label="orders table">
                    <TableHead>
                      <TableRow>
                        <TableCell>ORDER ID</TableCell>
                        <TableCell align="right">PLACED ON</TableCell>
                        <TableCell align="right">ORDER TOTAL</TableCell>
                        <TableCell align="right">PAID</TableCell>
                        <TableCell align="right">DELIVERED</TableCell>
                        <TableCell align="right"></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {orders.map((order) => (
                        <TableRow
                          key={order._id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            <Link
                              sx={{ textDecoration: "none", color: "#39648e" }}
                              href={`/order/${order._id}`}
                            >
                              {order._id}
                            </Link>
                          </TableCell>
                          <TableCell align="right">{order.createdAt}</TableCell>
                          <TableCell align="right">
                            {order.totalPrice}
                          </TableCell>
                          <TableCell align="right">
                            {" "}
                            {order.isPaid ? "✅" : "❌"}
                          </TableCell>
                          <TableCell align="right">
                            {order.isDelivered ? "✅" : "❌"}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </>
            )}
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Register;
