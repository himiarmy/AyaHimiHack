import React, { useContext, useEffect } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ButtonBase } from "@mui/material";

import { Button } from "antd";
import { useAuth } from "../../contexts/authContext";

import LoginModal from "../Auth/LoginModal";
import AuthModal from "../Auth/AuthModal";
import { Link } from "react-router-dom";
import { cartContext } from "../../contexts/cartContext";
import { favoritesContext } from "../../contexts/favoritesContext";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BookmarkBorder } from "@mui/icons-material";

// import { ADMIN } from "../../helpers/consts";

const Header = ({ handleLogout }) => {
  const { getCart, cartLength } = React.useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);

  const { getFavorites, favoritesLength } = React.useContext(favoritesContext);
  useEffect(() => {
    getFavorites();
  }, []);

  const [modalShow, setModalShow] = React.useState(false);
  const [modalShowRes, setModalShowRes] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const {
    user: { email },
  } = useAuth();
  console.log({ email });

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {/* <MenuItem onClick={handleMenuClose}> </MenuItem>
        <MenuItem onClick={handleMenuClose}> </MenuItem> */}

      {email ? (
        <Button onClick={handleLogout} ghost>
          Log Out
        </Button>
      ) : (
        <>
          <MenuItem
            onClick={() => {
              setModalShow(true);
              handleMenuClose();
            }}
          >
            {" "}
            Log In{" "}
          </MenuItem>
          <MenuItem
            onClick={() => {
              setModalShowRes(true);
              handleMenuClose();
            }}
          >
            {" "}
            Sign In{" "}
          </MenuItem>

          <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
          <AuthModal
            show={modalShowRes}
            onHide={() => setModalShowRes(false)}
          />
        </>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={+cartLength} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  return (
    //navbar start
    <Navbar
      expand="lg"
      fixed="top"
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <Container>
        <Navbar.Brand
          href="/"
          style={{
            color: "#ff8212",
            fontSize: "2vw",
            fontWeight: "700",
          }}
        >
          AtHome
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto"
            style={{
              fontSize: 20,
              fontWeight: "500",
              color: "white",
            }}
          >
            <Nav.Link
              href="/products"
              style={{
                color: "white",
              }}
            >
              Catalogue
            </Nav.Link>
            <Nav.Link
              href="/brands"
              style={{
                color: "white",
              }}
            >
              Brands
            </Nav.Link>
            <Nav.Link
              href="/planner  "
              style={{
                color: "white",
              }}
            >
              Planner
            </Nav.Link>
            <Nav.Link
              href="/delivery"
              style={{
                color: "white",
              }}
            >
              Delivery
            </Nav.Link>
          </Nav>

          <Box sx={{ flexGrow: 1, border: 0 }}>
            <AppBar
              position="static"
              style={{ backgroundColor: "rgba(0,0,0, 0.04)" }}
            >
              <Toolbar>
                <Link style={{ color: "white" }} to="/favorites">
                  <IconButton
                    size="large"
                    aria-label="show 4 new mails"
                    color="inherit"
                  >
                    <Badge badgeContent={+favoritesLength} color="error">
                      <BookmarkBorder />
                    </Badge>
                  </IconButton>
                </Link>

                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  <Link style={{ color: "white" }} to="/cart">
                    <IconButton
                      size="large"
                      aria-label="show 4 new mails"
                      color="inherit"
                    >
                      <Badge badgeContent={+cartLength} color="error">
                        <ShoppingCartIcon />
                      </Badge>
                    </IconButton>
                  </Link>
                </Box>

                {email ? (
                  <>
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      to="admin"
                    >
                      <ButtonBase
                        style={{ marginRight: "10px" }}
                        variant="text"
                      >
                        Profile
                      </ButtonBase>
                    </Link>
                    <Button onClick={handleLogout} ghost>
                      Log Out
                    </Button>
                  </>
                ) : (
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                )}

                <Box sx={{ display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                  >
                    <MoreIcon />
                  </IconButton>
                </Box>
              </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
          </Box>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

