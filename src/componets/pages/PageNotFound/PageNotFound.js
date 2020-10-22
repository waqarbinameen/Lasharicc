import React from "react";

import "./PageNotFound.css";

function PageNotFound() {
  return (
    <div>
      <section class="error_section4">
        <p class="error_section4_subtitle4">OOOPS. Page Not Found!</p>

        <h1 class="error_title4">
          <p className="text4">404</p>
          404
        </h1>

        <a href="/" class="btn4">
          Go To Home
        </a>
      </section>
    </div>
  );
}

export default PageNotFound;
