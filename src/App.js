import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar, Cart, Checkout } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [keyboards, setKeyboards] = useState([]);
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState({});
  const [rubberDucks, setRubberDucks] = useState([]);
  const [officeChairs, setOfficeChairs] = useState([]);
  const [beverages, setBeverages] = useState([]);
  const [productivity, setProductivity] = useState([]);
  const [monitors, setMonitors] = useState([]);
  const [computers, setComputers] = useState([]);
  const [desks, setDesks] = useState([]);
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const fetchKeyboards = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["keyboards"],
    });
    setKeyboards(data);
  };

  const fetchBooks = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["books"],
    });
    setBooks(data);
  };

  const fetchRubberDucks = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["rubber-ducks"],
    });
    setRubberDucks(data);
  };

  const fetchBeverages = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["beverages"],
    });
    setBeverages(data);
  };

  const fetchOfficeChairs = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["office-chairs"],
    });
    setOfficeChairs(data);
  };

  const fetchProductivity = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["productivity"],
    });
    setProductivity(data);
  };

  const fetchMonitors = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["monitors"],
    });
    setMonitors(data);
  };

  const fetchComputers = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["pcs-laptops"],
    });
    setComputers(data);
  };

  const fetchDesks = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["desks"],
    });
    setDesks(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const cart = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const cart = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const cart = await commerce.cart.remove(productId);
    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const cart = await commerce.cart.empty();
    setCart(cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchKeyboards();
    fetchBooks();
    fetchRubberDucks();
    fetchOfficeChairs();
    fetchBeverages();
    fetchMonitors();
    fetchComputers();
    fetchDesks();
    fetchCart();
    fetchProductivity();
  }, []);

  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Products
                keyboards={keyboards}
                books={books}
                rubberDucks={rubberDucks}
                officeChairs={officeChairs}
                onAddToCart={handleAddToCart}
                beverages={beverages}
                productivity={productivity}
                computers={computers}
                monitors={monitors}
                desks={desks}
              />
            }
          />
          <Route
            exact
            path="/cart"
            element={
              <Cart
                cart={cart}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
                handleEmptyCart={handleEmptyCart}
              />
            }
          />
          <Route
            exact
            path="/checkout"
            element={
              <Checkout
                cart={cart}
                order={order}
                onCaptureCheckout={handleCaptureCheckout}
                error={errorMessage}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
