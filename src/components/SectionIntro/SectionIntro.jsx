import React from "react";
import "./SectionIntro.css";
import { useLanguage } from "../../i18n";

export default function SectionIntro() {
  const { t } = useLanguage();

  return (
    <section className="mj-work-intro" aria-labelledby="work-heading">
      <div className="mj-work-intro__inner">

        <p className="mj-work-intro__number">
          {t.workIntroEyebrow}
        </p>

        <div className="mj-work-intro__title">
          <h2 id="work-heading">{t.workIntroTitle}</h2>
        </div>

        <div className="mj-work-intro__meta">
          <p>{t.workIntroMeta}</p>
        </div>

        <div className="mj-work-intro__description">
          <p>{t.workIntroText}</p>
        </div>

      </div>
    </section>
  );
}
