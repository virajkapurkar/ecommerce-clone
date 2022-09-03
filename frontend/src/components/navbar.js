import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import PersonIcon from "@mui/icons-material/Person";
import { createTheme, ThemeProvider } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";
import Link from "@mui/material/Link";
import { logout } from "../actions/userActions.js";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import logo from "../logo.png";

const theme = createTheme();
theme.typography.body2 = {
  fontSize: 11.5,
};

const linkStyle = {
  textDecoration: "none",
  color: "white",
};

function Navbar(props) {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#131921" }}>
          <Container>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <NavLink to="/" style={linkStyle}>
                  <Box sx={{ padding: 0, display: "inline" }}>
                    <img alt="logo" src={logo} height="50"></img>
                  </Box>
                </NavLink>
              </Typography>
              <NavLink to="/cart/" style={linkStyle}>
                <Button color="inherit">
                  {" "}
                  <ShoppingCartSharpIcon /> &nbsp;{" "}
                  <Typography variant="body2" display="block">
                    Cart
                  </Typography>
                </Button>
              </NavLink>

              {userInfo ? (
                <>
                  <Button color="inherit" onClick={handleClick}>
                    {" "}
                    <PersonIcon /> &nbsp;{" "}
                    <Typography variant="body2" display="block">
                      {userInfo.name}
                    </Typography>
                    <ArrowDropDownIcon />
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    id="user-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&:before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <Link
                      href="/profile"
                      sx={{ textDecoration: "none", color: "black" }}
                    >
                      <MenuItem>
                        <PersonIcon /> &nbsp; &nbsp;Profile
                      </MenuItem>
                    </Link>
                    <MenuItem onClick={handleLogout}>
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <NavLink to="/login" style={linkStyle}>
                  <Button color="inherit">
                    {" "}
                    <PersonIcon /> &nbsp;{" "}
                    <Typography variant="body2" display="block">
                      Login
                    </Typography>
                  </Button>
                </NavLink>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
export default Navbar;
