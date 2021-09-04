import React from "react";
import FooterLinks from "./footerLinks";
import { LinksFooter } from "./links";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { SiTwitter } from "react-icons/si";
import Icons from "../styles/Icons";
function App() {
  const [links, setLinks] = React.useState([]);

  return (
    <>
      <div className="footer-part">
        <div className="footer-p">
          <div className="footer">
            <div className="footer-head">
              <img src="img/logo3.png" />
            </div>
            <FooterLinks links={LinksFooter[0]} heading="Platform" />
            <FooterLinks links={LinksFooter[1]} heading="Learn" />
            <div>
              <h4 className="foter-sub-head">Download</h4>
              <div className="footer-sub-area">
                <div className="work-text-box btnstores flex-column d-flex">
                  <button className="btn">
                    <Icons name="a1" />
                    PlayStore
                  </button>
                  <button className="btn">
                    <Icons name="a2" /> AppleStore
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="foot-btmcs ">
        <p className="fs18 lh27">Copyright © 2021 AllinOne. All Rights Reserved.</p>
      </div>
    </>
  );
}

export default App;
