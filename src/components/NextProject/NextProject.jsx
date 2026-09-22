import React from "react";
import { Link } from "react-router-dom";
import "./NextProject.css";

export default function NextProject({
  title,
  category,
  to,
}) {
  return (
    <section
      className="next-project"
      aria-label="Próximo projeto"
    >
      <Link
        to={to}
        className="next-project__link"
      >
        <div className="next-project__top">
          <span className="next-project__label">
            PRÓXIMO PROJETO
          </span>

          <span
            className="next-project__arrow"
            aria-hidden="true"
          >
            ↗
          </span>
        </div>

        <div className="next-project__content">
          <h2 className="next-project__title">
            {title}
          </h2>

          {category && (
            <p className="next-project__category">
              {category}
            </p>
          )}
        </div>
      </Link>
    </section>
  );
}