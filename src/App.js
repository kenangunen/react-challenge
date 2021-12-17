import "./App.css";
import Header from "./components/header";
import { ProductContext } from "./contexts/ProductContext";
import { productDataBridge } from "./dataBridge/productDataBridge";

function App() {
  let productData = [];
  
  productDataBridge().then(function (response) {
    productData.push(...response);
  });

  return (
    <ProductContext.Provider value={productData}>
      <div className="container">
        <Header />
      </div>
    </ProductContext.Provider>
  );
}

export default App;
