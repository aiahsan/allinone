import React, { useState } from "react";
import Icons from "../styles/Icons";
import { db } from "../util/firebase";
import { collection, addDoc } from "firebase/firestore";
import { Toast } from "react-bootstrap";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import Loading from "../components/loading";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import LightSpeed from "react-reveal/LightSpeed";
import Fade from "react-reveal/Fade";
import Modal from "../components/modal";
import { useMediaQuery } from "react-responsive";
import Quote from "../components/quote";
// const bcrypt = require("bcryptjs");
import { query, where, getDocs } from "firebase/firestore";
import { useTranslation, Trans } from "react-i18next";

import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
const DisplayingErrorMessagesSchema = Yup.object().shape({
  email: Yup.string().required("Email Required").email(),
});
export default function Index() {
  const ismobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const [language,setlanguage]=React.useState(1);
  const [message, setmessage] = React.useState("");
  const [showmessage, setshowmessage] = React.useState(false);
  const [showAnimation, setshowAnimation] = React.useState(false);
  const [showAnimation1, setshowAnimation1] = React.useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function onKeyDown(keyEvent) {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
  }
  const add = async (email) => {
    console.log("test");
    setshowAnimation(true);
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "emails"), {
      email: email,
    })
      .then((x) => {
        setmessage("Email Registerd");
        setshowmessage(true);
        setshowAnimation(false);
        setTimeout(() => {
          setshowmessage(false);
        }, 3000);
      })
      .catch((x) => {
        setmessage("Something wen't wrong try agian");
        setshowmessage(true);
        setshowAnimation(false);
        setTimeout(() => {
          setshowmessage(false);
        }, 3000);
      });
  };
  const adduser = async ({ email, name, password, phone, referral }) => {
    setshowAnimation1(true);

    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    const q1 = query(collection(db, "users"), where("phone", "==", phone));
    const querySnapshot1 = await getDocs(q1);

    if (querySnapshot.docs.length > 0 || querySnapshot1.docs.length > 0) {
      setshowmessage(true);
      if (querySnapshot.docs.length > 0) {
        setmessage("Email already in use");
      }
      if (querySnapshot1.docs.length > 0) {
        setmessage("Phone Number already in use");
      }
      if (querySnapshot1.docs.length > 0 && querySnapshot.docs.length > 0) {
        setmessage("Email and Phone Number already in use");
      }
      setshowAnimation1(false);
      setTimeout(() => {
        setshowmessage(false);
      }, 4000);
    } else {
      (async () => {
        const docRef = await addDoc(collection(db, "users"), {
          email,
          name,
          password,
          phone,
          referral,
        })
          .then((x) => {
            setmessage("User Registerd");
            setshowmessage(true);
            setshowAnimation1(false);
            setShow(false);
            setTimeout(() => {
              setshowmessage(false);
            }, 3000);
          })
          .catch((x) => {
            setmessage("Something wen't wrong try agian");
            setshowmessage(true);
            setshowAnimation1(false);
            setTimeout(() => {
              setshowmessage(false);
            }, 3000);
          });
      })();
    }
  };

  React.useEffect(() => {
    document.onreadystatechange = () => {
      if (document.readyState === "complete") {
        const doc = document.getElementById("prl");

        if (doc) {
          doc.style.display = "none";
        }
      }
    };
  }, []);
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    if(lng=="en")
    {
      setlanguage(0)
    }
    else
    {
      setlanguage(1)
    }
    i18n.changeLanguage(lng);
  };
  return (
    <>
      {showmessage ? (
        <Toast
          style={{
            position: "fixed",
            top: 10,
            right: 10,
            zIndex: 10000,
          }}
        >
          <Toast.Header onClick={() => setshowmessage(false)}>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">All in One City</strong>
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      ) : (
        <></>
      )}
      <div id="prl" class="preload">
        <div class="pulse">
          <img src="img/logom1.png" className="mr19 logo-nav" alt="" />
        </div>
      </div>

      <div className="bg">
        <div className="container nav-barcst">
          <NavBar
          language={language}
            show={show}
            handleClose={handleClose}
            handleShow={handleShow}
            changeLanguage={changeLanguage}
          />
        </div>
        <Element name="home">
          <div className="container tripbox">
            <div className="d-flex top-section">
              <div>
                <Fade top={!ismobile ? true : false} opposite>
                  <h1 className="fw600 fs60 lh90">
                  <Trans i18nKey="title">trans</Trans>
                     
                  </h1>
                  <h4><Trans i18nKey="pre">trans</Trans></h4>
                </Fade>
                <Fade left={!ismobile ? true : false}>
                  <p className="fs16 lh24">
                  <Trans i18nKey="des">trans</Trans>
                    
                  </p>
                </Fade>

                <div className="flex-mb">
                  <button
                    onClick={() => setShow(true)}
                    className="btn btn-sign-up fw500 fs18 lh27"
                  >
                    <Trans i18nKey="pr">trans</Trans>
                  </button>
                  {/* <button className="btn fs-16 lh27">Pre-Register</button> */}
                  {/* <button className="btn fs-16 lh27">
                    <Icons name="playstore" />
                    Pre-Register
                  </button>
                  <button className="btn fs-16 lh27">
                    <Icons name="appstore" />
                    Pre-Register
                  </button> */}
                </div>
              </div>
              <div>
                <img className="no-dsp" src="img/m1.png" alt="" />
              </div>
            </div>
          </div>
        </Element>
      </div>
    
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={async (values, { setSubmitting }) => {
          add(values.email);
        }}
      >
        {({
          errors,
          touched,
          getFieldProps,
          submitForm,
          setErrors,
          handleBlur,
          values,
        }) => {
          // cstErrors = errors;

          return (
            <Form onKeyDown={onKeyDown}>
              <section className="container subscribe">
                <div className="pos-res2">
                  <img className="pos-abs2" src="img/mr.png" />
                </div>
                <div className="flex-between flex-column">
                  <h1 className="fw600 fs33 lh54">
                    {t("e1")}
                  </h1>
                  <div className="sb-box flex-between w-100">
                    <div className="flex-between inputbox">
                      <Icons name="mail" />
                      <input
                        {...getFieldProps("email")}
                        placeholder={t("e2")}
                        type="text"
                      />
                    </div>
                    <div>
                      {" "}
                      <button type="submit" className="btn fw600 fs17 lh23">
                        {showAnimation == true ? <Loading /> :t("e3")}
                      </button>
                    </div>
                  </div>

                  {touched.email && errors.email && (
                    <div style={{ color: "red", marginTop: 10, maxWidth: 320 }}>
                      {errors.email}
                    </div>
                  )}
                </div>
                <div className="pos-res1">
                  <img className="pos-ab1" src="img/ml.png" />
                </div>
              </section>
            </Form>
          );
        }}
      </Formik>
      <Footer setShow={setShow} />
      <Modal
        showmessage={showmessage}
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        adduser={adduser}
        showAnimation1={showAnimation1}
        language={language}
      />
    </>
  );
}
