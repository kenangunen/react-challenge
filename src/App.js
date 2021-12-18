import "./app.scss";
import Header from "./components/header";
import ProductContainer from "./components/productContainer";
import SearchResult from "./components/searchResult";
import { ProductProvider } from "./contexts/ProductContext";
import { FilterOptionsProvider } from "./contexts/FilterOptionsContext";
import { FilteredDataProvider } from "./contexts/FilteredDataContext";
import { SortOptionsProvider } from "./contexts/SortOptionsContext";
import { ProductAddedToCartProvider } from "./contexts/ProductAddedToCartContext";
import FilterContainer from "./components/filterContainer";

function App() {
  return (
    <ProductProvider>
      <FilterOptionsProvider>
        <FilteredDataProvider>
          <SortOptionsProvider>
            <ProductAddedToCartProvider>
              <div className="container">
                <Header />
                <div className="content-wrapper">
                  <section className="top-section">
                    <SearchResult />
                  </section>
                  <section className="down-section">
                    <div className="filter-container">
                      <FilterContainer />
                    </div>
                    <ProductContainer />
                  </section>
                </div>
              </div>
            </ProductAddedToCartProvider>
          </SortOptionsProvider>
        </FilteredDataProvider>
      </FilterOptionsProvider>
    </ProductProvider>
  );
}

export default App;
