import { component$ } from "@builder.io/qwik";
// import { Link } from "@builder.io/qwik-city";

import styles from "./header.module.css";

export default component$(() => {
  return (
    <header class={["relative", styles.header]}>
      {/* <div class={["fixed right-0  top-0 z-50 m-4", styles.wrapper]}>
        hola mundo
      </div> */}
      {/* <div class="container">
        <ul id="menu">
          <a
            class="menu-button icon-plus"
            id="open-menu"
            href="#menu"
            title="Show navigation"
          ></a>
          <a
            class="menu-button icon-minus"
            href="#0"
            title="Hide navigation"
          ></a>
          <li class="menu-item">
            <a href="#menu">
              <span class="fa fa-github"></span>
            </a>
          </li>
          <li class="menu-item">
            <a href="#menu">
              <span class="fa fa-linkedin"></span>
            </a>
          </li>
          <li class="menu-item">
            <a href="#menu">
              <span class="fa fa-instagram"></span>
            </a>
          </li>
          <li class="menu-item">
            <a href="#menu">
              <span class="fa fa-twitter"></span>
            </a>
          </li>
        </ul>
      </div> */}
    </header>
  );
});
