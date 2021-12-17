import "./app.scss";
import Header from "./components/header";
import ProductContainer from "./components/productContainer";
import SearchResult from "./components/searchResult";
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
        <div className="content-wrapper">
          <section className="first-section">
            <SearchResult />
          </section>
          <section className="second-section">
            <div className="filter-container"></div>
            <ProductContainer />
          </section>
        </div>
      </div>
    </ProductContext.Provider>
  );
}

export default App;
