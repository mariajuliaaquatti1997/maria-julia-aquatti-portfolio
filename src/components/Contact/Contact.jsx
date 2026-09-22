import React from "react";
import "./Contact.css";
import { useLanguage } from "../../i18n";

const EMAIL = "mariajuliaaquatti@gmail.com";

const SOCIAL_LINKS = {
  linkedin:
    "https://www.linkedin.com/in/mariajuliaaquatti-ux/",

  behance:
    "https://www.behance.net/mariajuliaaquattiart",
};

export default function Contact() {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  return (
    <section
      className="mj-contact"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="mj-contact__inner">

        {/* EYEBROW */}
        <p className="mj-contact__eyebrow">
          {t.contactEyebrow}
        </p>

        {/* EDITORIAL TITLE */}
        <div className="mj-contact__hero">
          <h2 id="contact-heading">
            {t.contactEditorialTitle}
          </h2>
        </div>

        {/* CONTACT INFORMATION */}
        <div className="mj-contact__bottom">

          <div className="mj-contact__intro">
            <p>{t.contactIntro}</p>
          </div>

          <div className="mj-contact__links">

            {/* EMAIL */}
            <div className="mj-contact__link-group">
              <span>{t.emailLabel}</span>

              <a href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </div>

            {/* LINKEDIN */}
            <div className="mj-contact__link-group">
              <span>{t.linkedinLabel}</span>

              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`LinkedIn — ${t.opensNewWindow}`}
              >
                LinkedIn

                <span
                  className="mj-contact__arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>
            </div>

            {/* BEHANCE */}
            <div className="mj-contact__link-group">
              <span>{t.behanceLabel}</span>

              <a
                href={SOCIAL_LINKS.behance}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Behance — ${t.opensNewWindow}`}
              >
                Behance

                <span
                  className="mj-contact__arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>
            </div>

          </div>
        </div>

        {/* FOOTER */}
        <div className="mj-contact__footer">

          <p>
            © {currentYear} MARIA JÚLIA AQUATTI
          </p>

          <a
            href={`mailto:${EMAIL}`}
            className="mj-contact__cta"
          >
            {t.sayHello}

            <span aria-hidden="true">
              ↗
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}