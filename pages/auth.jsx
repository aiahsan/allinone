import React from "react";
import * as Yup from "yup";
import { FaUser } from "react-icons/fa";
import { db } from "../util/firebase";

import { IoMdMail, IoIosCall } from "react-icons/Io";
import { Formik, Form } from "formik";
import { RiKey2Fill } from "react-icons/ri";
import Loading from "../components/loading";
import { Toast } from "react-bootstrap";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const DisplayingErrorMessagesSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().required("Required").email(),
  phone: Yup.string().required("Required"),
  password: Yup.string()
    .required("Required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),

  confirmPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
export default function Auth() {
  const [message, setmessage] = React.useState("");
  const [showmessage, setshowmessage] = React.useState(false);
  const [showAnimation, setshowAnimation] = React.useState(false);
  React.useEffect(() => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, "test@mail.com", "test12345")
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    console.log(auth);
  }, []);
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
      <div className="flex-login">
        <div className="modal-main">
          <img src="img/logo3.png" />
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={DisplayingErrorMessagesSchema}
            onSubmit={async (values, { setSubmitting }) => {
              adduser(values);
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
                <Form className="w-100">
                  <section className="container subscribe no-bg create-account">
                    <div className="flex-between flex-column">
                      <div className="w-100">
                        <div className="flex-between inputbox">
                          <IoMdMail />
                          <input
                            {...getFieldProps("email")}
                            placeholder="Your email"
                            type="text"
                          />
                        </div>
                      </div>

                      {touched.email && errors.email && (
                        <div
                          style={{
                            color: "red",
                            marginTop: 10,
                            maxWidth: 320,
                          }}
                        >
                          {errors.email}
                        </div>
                      )}
                    </div>

                    <div className="flex-between flex-column">
                      <div className="w-100">
                        <div className="flex-between inputbox">
                          <RiKey2Fill />
                          <input
                            {...getFieldProps("password")}
                            placeholder="Password"
                            type="password"
                          />
                        </div>
                      </div>

                      {touched.password && errors.password && (
                        <div
                          style={{
                            color: "red",
                            marginTop: 10,
                            maxWidth: 320,
                          }}
                        >
                          {errors.password}
                        </div>
                      )}
                    </div>

                    <div className="flex-between justify-content-center">
                      {" "}
                      <button
                        onClick={() => submitForm()}
                        className="btn fw600 fs17 lh23"
                      >
                        {showAnimation == true ? (
                          <div style={{ position: "relative", top: -21 }}>
                            {" "}
                            <Loading />
                          </div>
                        ) : (
                          " Login"
                        )}
                      </button>
                    </div>
                  </section>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
}
