import './index.css';
import './card.css';
import './footer.css';
import './header.css';
import './cart.css';
import './cartcard.css';

import { Page } from './components/Page';
import { CartPage } from './components/CartPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="root">
        <Header />
        <Routes>
          <Route path="/cart" element={<CartPage />}>
          </Route>
          <Route path="/" element={<Page />}>
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}