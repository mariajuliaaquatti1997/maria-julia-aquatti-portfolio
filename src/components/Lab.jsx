import React from "react";
import { useLanguage } from "../i18n";

export default function Lab() { const { t } = useLanguage(); return <section id="experiments" className="experiments section"><div><p className="eyebrow">{t.lab}</p><h2>{t.labTitle}</h2></div><div className="experiment-card"><div className="experiment-shape" /><p>DESIGN × CODE</p><h3>{t.labText}</h3><span>React · CSS · JavaScript</span></div></section>; }
