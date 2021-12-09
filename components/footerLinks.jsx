import React from "react";
import { useTranslation, Trans } from "react-i18next";

export default ({ heading, links }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
      <h4 className="foter-sub-head">{heading}</h4>
      <div className="footer-sub-area">
        {links.map((x, i) => (
          <a href={x.href} key={i} className="foter-sub-a">
            {t(x.name)} {x.hasSpan ? x.span() : <></>}
          </a>
        ))}
      </div>
    </div>
  );
};
