import React from "react";
import Arrow from "./Arrow";
import { useLanguage } from "../i18n";

function BehanceIcon() { return <span className="behance-icon" aria-hidden="true">Bē</span>; }
function LinkedInIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 8.5H3.2V21h3.3V8.5ZM4.85 3A1.9 1.9 0 1 0 4.9 6.8 1.9 1.9 0 0 0 4.85 3ZM21 13.8c0-3.8-2-5.6-4.7-5.6-2.2 0-3.1 1.2-3.6 2v-1.7H9.4V21h3.3v-6.2c0-1.6.3-3.2 2.3-3.2 2 0 2 1.9 2 3.3V21H21v-7.2Z" /></svg>; }
function MailIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5.5h18v13H3v-13Zm1.8 1.8L12 12.7l7.2-5.4H4.8Zm14.4 9.4V9.5L12 14.8 4.8 9.5v7.2h14.4Z" /></svg>; }

export default function Contact() {
  const { t } = useLanguage();
  return <section id="contact" className="contact section"><p className="eyebrow">{t.contact}</p><h2>{t.contactTitle}</h2><a className="contact-mail" href="mailto:contato@mariajuliaaquatti.com">contato@mariajuliaaquatti.com <Arrow /></a><div className="socials" aria-label="Redes sociais"><a className="social-icon" href="https://www.behance.net/mariajuliaaquattiart" target="_blank" rel="noreferrer" aria-label="Portfólio no Behance"><BehanceIcon /></a><a className="social-icon" href="https://br.linkedin.com/in/maria-j%C3%BAlia-aquatti-930090284" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a><a className="social-icon" href="mailto:contato@mariajuliaaquatti.com" aria-label="Enviar e-mail"><MailIcon /></a></div><a className="portfolio-link" href="https://www.behance.net/mariajuliaaquattiart" target="_blank" rel="noreferrer">VER PORTFÓLIO COMPLETO <Arrow /></a></section>;
}
