// import { ref } from 'vue';
// import { Link } from 'vue-router';
// import Cart from './Cart.vue';
// import LoginBadge from './LoginBadge.vue';
// import MessageList from './MessageList.vue';

import Link from "next/link";
import { useState } from "react";

// const isActive = ref(false);
// const isCartOpen = ref(false);

const Cart = () => <div></div>;
const LoginBadge = () => <div></div>;
const MessageList = () => <div></div>;

export default () => {
  const [isActive, setIsActive] = useState(false);

  // const isCartOpen = useState(false);

  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <Cart isOpen="isCartOpen" />
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </a>

          <a
            className={` navbar-burger ${isActive ? "is-active" : ""} `}
            onClick={() => setIsActive(!isActive)}
            role="button"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarBasicExample"
          className={` navbar-menu ${isActive ? "is-active" : ""} `}
        >
          <div className="navbar-start">
            <Link href="/" className="navbar-item">
              Home
            </Link>

            <Link href="/products" className="navbar-item">
              Products
            </Link>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <Link href="/about" className="navbar-item">
                  About
                </Link>
                <a className="navbar-item">Jobs</a>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <MessageList />
            <div className="navbar-item">
              <div className="buttons">
                <button
                  className="button is-primary"
                  click="isCartOpen = !isCartOpen"
                >
                  <strong>Cart</strong>
                </button>
              </div>
            </div>
            <div className="navbar-item">
              <LoginBadge />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
