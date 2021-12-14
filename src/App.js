import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ProductsList from "./components/ProductsList/ProductsList";
import ProductsContextProvider from "./contexts/productsContext";
import AuthContextProvider from "./contexts/authContext";

const App = () => {
  let routes = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
    {
      link: "/products",
      element: <ProductsList />,
      id: 2,
    },
  ];
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            {routes.map((item) => (
              <Route path={item.link} element={item.element} />
            ))}
          </Routes>
          <Footer />
        </BrowserRouter>
      </ProductsContextProvider>
    </AuthContextProvider>
  );
};

export default App;
