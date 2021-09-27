import React from "react";
import FooterLinks from "./footerLinks";
import { LinksFooter } from "./links";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { SiTwitter } from "react-icons/si";
import Icons from "../styles/Icons";
import { useTranslation, Trans } from "react-i18next";

function App({ setShow }) {
  const [links, setLinks] = React.useState([]);
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <div className="footer-part">
        <div className="footer-p">
          <div className="footer">
            <div className="footer-head">
              <img className="logo-footer" src="img/logo3.png" />
            </div>
            <FooterLinks links={LinksFooter[0]} heading={t("f1")}/>
            <FooterLinks links={LinksFooter[1]} heading={t("f2")} />
            <div>
              <h4 className="foter-sub-head">{t("f3")}</h4>
              <div className="footer-sub-area">
                <div className="work-text-box btnstores flex-column d-flex">
                  <button
                    className="btn fs-16 lh27"
                    onClick={() => setShow(true)}
                  >
                    {t("f9")}
                  </button>
                  {/* <button className="btn">
                    <Icons name="a1" />
                    Pre-Register
                  </button>
                  <button className="btn">
                    <Icons name="a2" /> Pre-Register
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="foot-btmcs ">
        <p className="fs18 lh27">
        {t("f10")}
        </p>
      </div>
    </>
  );
}

export default App;
