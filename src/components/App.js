import React from "react";
import Header from "./header";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Login from "./auth/Login";
import Register from "./auth/Register";
import AllBooks from "./AllBooks";
import Footer from "./Footer";
import Home from "./Home";
import Book from "./Book";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/all" component={AllBooks} />
        <Route path="/books/:id" component={Book} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
