
import {makeStyles } from "@material-ui/core";
import React from "react";
import Header from "../Header/Header";
import { Carousel } from "react-bootstrap";
import { useAuth } from "../../contexts/authContext";

const useStyles = makeStyles((theme) => ({
  header: {
    // backgroundImage: `url(${"https://images.unsplash.com/photo-1629646526507-84ea50bb16e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },

  carousel: {
    marginTop: "0",
    borderRadius: "45px",
    margin: "auto",
  },
}));

const Home = () => {
  const classes = useStyles();
  const { handleLogout, user } = useAuth();
  return (
    <>
      <div className={classes.header}>
        {/* carousel starts */}

        <div className={classes.carousel}>
          <Carousel>
            <Carousel.Item interval={2000}>
              <img
                style={{
                  maxHeight: "90vh",
                }}
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                style={{
                  maxHeight: "90vh",
                }}
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1615827157389-991d5b156c37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                style={{
                  maxHeight: "90vh",
                }}
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <Header handleLogout={handleLogout} />
    </>
  );
};

export default Home;