import React from "react";
import Icons from "../styles/Icons";
import { db } from "../util/firebase";
import { collection, addDoc } from "firebase/firestore";
import { Toast } from "react-bootstrap";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import Loading from "../components/loading";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
const DisplayingErrorMessagesSchema = Yup.object().shape({
  email: Yup.string().required("Email Required").email(),
});
export default function Index() {
  const [message, setmessage] = React.useState("");
  const [showmessage, setshowmessage] = React.useState(false);
  const [showAnimation, setshowAnimation] = React.useState(false);

  function onKeyDown(keyEvent: any) {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
  }
  const add = async (email: string) => {
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
            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
            <strong className="mr-auto">All in One City</strong>
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      ) : (
        <></>
      )}

      <div className="bg">
        <div className="container nav-barcst">
          <NavBar />
        </div>
        <div className="container tripbox">
          <div className="d-flex top-section">
            <div>
              <h1 className="fw600 fs60 lh90">Get the new AllinOne App for your next trip</h1>
              <p className="fs16 lh24">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
              </p>
              <div className="flex-mb">
                <button className="btn fs18 lh27">
                  <Icons name="playstore" />
                  PlayStore
                </button>
                <button className="btn fs18 lh27">
                  <Icons name="appstore" />
                  AppleStore
                </button>
              </div>
            </div>
            <div>
              <img className="no-dsp" src="img/m1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <section className="container features">
        <h1 className="fw600 fs50 lh75"> App Features</h1>
        <div className="flex-between w-100">
          <div className="fearture-box">
            <div className="svg-p bg-svg-1 ">
              <Icons name="b1" />
            </div>
            <h2 className="fw600 fs30 lh45">Booking</h2>
            <p className="fs16 lh24">
              Lorem Ipsum is simply dummy text of the printing and typesetting indus. Lorem Ipsum{" "}
            </p>
          </div>
          <div className="fearture-box mr-no-0">
            <div className="svg-p bg-svg-2 ">
              <Icons name="b2" />
            </div>
            <h2 className="fw600 fs30 lh45">Explore</h2>
            <p className="fs16 lh24">
              Lorem Ipsum is simply dummy text of the printing and typesetting indus. Lorem Ipsum{" "}
            </p>
          </div>

          <div className="fearture-box">
            <div className="svg-p bg-svg-3 ">
              <Icons name="b3" />
            </div>
            <h2 className="fw600 fs30 lh45">Customer Support</h2>
            <p className="fs16 lh24">
              Lorem Ipsum is simply dummy text of the printing and typesetting indus. Lorem Ipsum{" "}
            </p>
          </div>
        </div>
      </section>

      <section className="container features howitwork">
        <h1 className="fw600 fs50 lh75"> How it Works</h1>

        <div className="d-flex w-100 howitwork-flex ">
          <div className="howitwork-inner">
            <img src="img/vpng.png" className="w-100" />
          </div>
          <div>
            <div className="d-flex work-text-box  ">
              <div className="mr-20">
                <Icons name="download" />
              </div>
              <div>
                <h2 className="fw-500 fs30 lh45">Download the App</h2>
                <div className="btnstores">
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
            <div className="d-flex align-items-center work-text-box mt-40 ">
              <div className="mr-20">
                <Icons name="ntrip" />
              </div>
              <div>
                <h2 className="fw-500 fs30 lh45">Find your next trip</h2>
              </div>
            </div>
            <div className="d-flex align-items-center work-text-box mt-40 ">
              <div className="mr-20">
                <Icons name="card" />
              </div>
              <div>
                <h2 className="fw-500 fs30 lh45">Book within the App</h2>
              </div>
            </div>

            <div className="d-flex align-items-center work-text-box mt-40 ">
              <div className="mr-20">
                <Icons name="hour" />
              </div>
              <div>
                <h2 className="fw-500 fs30 lh45">Enjoy your trip</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="hero">
        <h1 className="fw500 fs60 lh90">Explore Dubai, London, Mykonos, Ibiza </h1>
      </div>
      <section className="features2">
        <div className="flex-between">
          <img className="w-img-cst" src="img/m2.png" />
          <div className="f-box">
            <div className="flex-between">
              <div className="jdkf23">
                <Icons name="e1" />
              </div>
              <h2 className="fw600 fs20 lh30">
                Easily find your next Hotel, Restaurant and Activity based on your location
              </h2>
            </div>
            <div className="d-flex align-items-center mt-100">
              <h2 className="fw600 fs20 lh30">Best Price Guarantee </h2>
              <Icons name="e1" />
            </div>
            <div className="flex-between mt-100">
              <div className="jdkf23">
                <Icons name="e1" />
              </div>
              <h2 className="fw600 fs20 lh30">Available in: Dubai, London, Ibiza</h2>
            </div>
            <div className="d-flex align-items-center mt-100">
              <h2 className="fw600 fs20 lh30">Refer friends and earn up to 10% </h2>
              <Icons name="e1" />
            </div>
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
        {({ errors, touched, getFieldProps, submitForm, setErrors, handleBlur, values }) => {
          // cstErrors = errors;

          return (
            <Form onKeyDown={onKeyDown}>
              <section className="container subscribe">
                <div className="pos-res2">
                  <img className="pos-abs2" src="img/mr.png" />
                </div>
                <div className="flex-between flex-column">
                  <h1 className="fw600 fs33 lh54">
                    Subscribe to get information, latest news and other interesting offers about ALLinOne
                  </h1>
                  <div className="sb-box flex-between w-100">
                    <div className="flex-between inputbox">
                      <Icons name="mail" />
                      <input {...getFieldProps("email")} placeholder="Your email" type="text" />
                    </div>
                    <div>
                      {" "}
                      <button onClick={() => submitForm()} className="btn fw600 fs17 lh23">
                        {showAnimation == true ? <Loading /> : " Subscribe"}
                      </button>
                    </div>
                  </div>

                  {touched.email && errors.email && (
                    <div style={{ color: "red", marginTop: 10, maxWidth: 320 }}>{errors.email}</div>
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
    </>
  );
}
