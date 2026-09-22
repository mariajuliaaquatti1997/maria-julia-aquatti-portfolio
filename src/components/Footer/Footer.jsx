import React from "react";
import { useLanguage } from "../../i18n";

export default function Footer() {
  const { t } = useLanguage();
  return <footer><span>© {new Date().getFullYear()} MARIA JÚLIA AQUATTI</span><span>{t.footerTagline}</span></footer>;
}
