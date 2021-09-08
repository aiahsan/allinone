import React from "react";
import FooterLinks from "./footerLinks";
import { LinksFooter } from "./links";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { SiTwitter } from "react-icons/si";
import Icons from "../styles/Icons";
function App({ setShow }) {
  const [links, setLinks] = React.useState([]);

  return (
    <>
      <div className="footer-part">
        <div className="footer-p">
          <div className="footer">
            <div className="footer-head">
              <img className="logo-footer" src="img/logo3.png" />
            </div>
            <FooterLinks links={LinksFooter[0]} heading="Company" />
            <FooterLinks links={LinksFooter[1]} heading="App" />
            <div>
              <h4 className="foter-sub-head">Download</h4>
              <div className="footer-sub-area">
                <div className="work-text-box btnstores flex-column d-flex">
                  <button
                    className="btn fs-16 lh27"
                    onClick={() => setShow(true)}
                  >
                    Pre-Register
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
          Copyright © 2021 AllinOne. All Rights Reserved.
        </p>
      </div>
    </>
  );
}

export default App;
