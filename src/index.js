import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './context/product_context';
import { CartProvider } from './context/cart_context';
import { FavProvider } from './context/favourite_context';
import { FilterProvider } from './context/filter_context';
import { SearchProvider } from './context/search_context';
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <SearchProvider>
        <FilterProvider>
          <CartProvider>
            <FavProvider>
                <BrowserRouter>
                  <ScrollToTop />
                  <App />
                </BrowserRouter>
            </FavProvider>
          </CartProvider>
        </FilterProvider>
      </SearchProvider>
    </AppProvider>
  </React.StrictMode>
);