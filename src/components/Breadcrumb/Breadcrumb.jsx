import React from "react";
import "./Breadcrumb.scss";
import PropTypes from "prop-types";

const Breadcrumb = (props) => {
  const { pageName, bigTitle } = props;

  const background_image =
    "https://medi-dove.netlify.app/static/media/page-bg.19c1fbc541073bd8ef07.jpg";

  return (
    <section
      class="breadcrumb__section"
      style={{ backgroundImage: `url(${background_image})` }}
    >
      <div class="breadcrumb__container container">
        <div class="row">
          <div class="col-lg-9 col-md-9">
            <div class="breadcrumb__title">
              <p class="title--small">We are here for your care.</p>
              <h1 class="title--big">{bigTitle}</h1>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 breadcrumb__wrapper">
            <div class="custom-breadcrumb">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb ">
                  <li class="breadcrumb__item">
                    <a href="/">Home</a>
                  </li>
                  <li class="breadcrumb__item active" aria-current="page">
                    {pageName}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Breadcrumb.propTypes = {
  pageName: PropTypes.string,
};

export default Breadcrumb;
