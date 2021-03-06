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
  const [message, setmessage] = React.useState("");
  const [showmessage, setshowmessage] = React.useState(false);
  const [showAnimation, setshowAnimation] = React.useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function onKeyDown(keyEvent) {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
  }
  const add = async (email) => {
    (async () => {
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
    })();
  };
  return (
    <>
      {showmessage ? (
        <Toast
          style={{
            position: "fixed",
            top: 10,
            right: 10,
            zIndex: 1,
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

      <div className="bg">
        <div className="container nav-barcst">
          <NavBar
            show={show}
            handleClose={handleClose}
            handleShow={handleShow}
          />
        </div>
        <Element name="home">
          <div className="container tripbox">
            <div className="d-flex top-section">
              <div>
                <Fade top opposite>
                  <h1 className="fw600 fs60 lh90">
                    Get the new AllinOne App for your next trip
                  </h1>
                </Fade>
                <Fade right opposite>
                  <p className="fs16 lh24">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type
                  </p>
                </Fade>

                <div className="flex-mb">
                  <button className="btn fs-16 lh27">Pre-Register</button>
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
      <Element name="features">
        <section className="container features">
          <h1 className="fw600 fs50 lh75"> App Features</h1>
          <div className="flex-between w-100">
            <Fade left>
              <div className="fearture-box">
                <div className="svg-p bg-svg-1 ">
                  <Icons name="b1" />
                </div>
                <h2 className="fw600 fs30 lh45">Booking</h2>
                <p className="fs16 lh24">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting indus. Lorem Ipsum{" "}
                </p>
              </div>
            </Fade>

            <Fade bottom>
              <div className="fearture-box mr-no-0">
                <div className="svg-p bg-svg-2 ">
                  <Icons name="b2" />
                </div>
                <h2 className="fw600 fs30 lh45">Explore</h2>
                <p className="fs16 lh24">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting indus. Lorem Ipsum{" "}
                </p>
              </div>
            </Fade>
            <Fade right>
              <div className="fearture-box">
                <div className="svg-p bg-svg-3 ">
                  <Icons name="b3" />
                </div>
                <h2 className="fw600 fs30 lh45">Customer Support</h2>
                <p className="fs16 lh24">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting indus. Lorem Ipsum{" "}
                </p>
              </div>
            </Fade>
          </div>
        </section>
      </Element>
      <Element name="howitwork">
        <section className="container features howitwork">
          <Fade>
            {" "}
            <h1 className="fw600 fs50 lh75"> How it Works</h1>
          </Fade>

          <div className="d-flex w-100 howitwork-flex ">
            <div className="howitwork-inner">
              <img src="img/vpng.jpg" className="mx-imgplay w-100" />
            </div>
            <div>
              <Fade left>
                {" "}
                <div className="d-flex work-text-box  ">
                  <div className="mr-20 sm-icon">
                    <Icons name="download" />
                  </div>
                  <div>
                    <h2 className="fw-500 fs30 lh45">Download the App</h2>
                    <div className="btnstores">
                      <button className="btn fs-16 lh27">Pre-Register</button>
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
              </Fade>
              <Fade left>
                {" "}
                <div className="d-flex align-items-center work-text-box mt-40 sm-icon">
                  <div className="mr-20">
                    <Icons name="ntrip" />
                  </div>
                  <div>
                    <h2 className="fw-500 fs30 lh45">Find your next trip</h2>
                  </div>
                </div>
              </Fade>
              <Fade left>
                {" "}
                <div className="d-flex align-items-center work-text-box mt-40 sm-icon">
                  <div className="mr-20">
                    <Icons name="card" />
                  </div>
                  <div>
                    <h2 className="fw-500 fs30 lh45">Book within the App</h2>
                  </div>
                </div>
              </Fade>
              <Fade left>
                {" "}
                <div className="d-flex align-items-center work-text-box mt-40 sm-icon ">
                  <div className="mr-20">
                    <Icons name="hour" />
                  </div>
                  <div>
                    <h2 className="fw-500 fs30 lh45">Enjoy your trip</h2>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </section>

        <div className="hero">
          <h1 className="fw500 fs60 lh90">
            Explore Dubai, London, Mykonos, Ibiza{" "}
          </h1>
        </div>
      </Element>
      <section className="features2">
        <div className="flex-between">
          <img className="w-img-cst" src="img/m2.png" />
          <div className="f-box">
            <LightSpeed left>
              <div className="flex-between">
                <div className="jdkf23">
                  <Icons name="e1" />
                </div>

                <h2 className="fw600 fs20 lh30">
                  Easily find your next Hotel, Restaurant and Activity based on
                  your location
                </h2>
              </div>
            </LightSpeed>
            <LightSpeed right opposite delay={800}>
              <div className="d-flex align-items-center mt-100">
                <h2 className="fw600 fs20 lh30">Best Price Guarantee </h2>
                <Icons name="e1" />
              </div>
            </LightSpeed>
            <LightSpeed left delay={800}>
              <div className="flex-between mt-100">
                <div className="jdkf23">
                  <Icons name="e1" />
                </div>
                <h2 className="fw600 fs20 lh30">
                  Available in: Dubai, London, Ibiza
                </h2>
              </div>
            </LightSpeed>
            <LightSpeed right opposite delay={800}>
              <div className="d-flex align-items-center mt-100">
                <h2 className="fw600 fs20 lh30">
                  Refer friends and earn up to 10%{" "}
                </h2>
                <Icons name="e1" />
              </div>
            </LightSpeed>
          </div>
          <img className="w-img-cst m3img" src="img/m3.png" />
        </div>
      </section>
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
                    Subscribe to get information, latest news and other
                    interesting offers about ALLinOne
                  </h1>
                  <div className="sb-box flex-between w-100">
                    <div className="flex-between inputbox">
                      <Icons name="mail" />
                      <input
                        {...getFieldProps("email")}
                        placeholder="Your email"
                        type="text"
                      />
                    </div>
                    <div>
                      {" "}
                      <button
                        onClick={() => submitForm()}
                        className="btn fw600 fs17 lh23"
                      >
                        {showAnimation == true ? <Loading /> : " Subscribe"}
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
      <Footer />
      <Modal
        showmessage={showmessage}
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />
    </>
  );
}
