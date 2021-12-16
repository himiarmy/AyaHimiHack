    
import { BrowserRouter } from "react-router-dom";
import BrandsContextProvider from "./contexts/brandsContext";

import Routing from "./Routing";

import "antd/dist/antd.css";
import ProductsContextProvider from "./contexts/productsContext";
import { Footer, Header } from "antd/lib/layout/layout";

const App = () => {
  

  return (
    <BrandsContextProvider>
        <ProductsContextProvider>
          <BrowserRouter>
            <Header />
            <Routing />
            <Footer />
          </BrowserRouter>
        </ProductsContextProvider>
      </BrandsContextProvider>
  );
};

export default App;
