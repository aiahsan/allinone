import { Modal } from "react-bootstrap";
import * as Yup from "yup";
import { FaUser } from "react-icons/fa";
import { IoMdMail, IoIosCall } from "react-icons/Io";
import { Formik, Form } from "formik";
import { RiKey2Fill } from "react-icons/ri";
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
export default ({ show, handleClose, handleShow, showAnimation }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div className="modal-main">
            <img src="img/logo3.png" />
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
                  <Form className="w-100">
                    <section className="container subscribe no-bg create-account">
                      <div className="flex-between flex-column">
                        <div className="w-100">
                          <div className="flex-between inputbox">
                            <FaUser />
                            <input
                              {...getFieldProps("name")}
                              placeholder="Your Name"
                              type="text"
                            />
                          </div>
                        </div>

                        {touched.name && errors.name && (
                          <div
                            style={{
                              color: "red",
                              marginTop: 10,
                              maxWidth: 320,
                            }}
                          >
                            {errors.name}
                          </div>
                        )}
                      </div>
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
                            <IoIosCall />
                            <input
                              {...getFieldProps("phone")}
                              placeholder="Phone Number"
                              type="text"
                            />
                          </div>
                        </div>

                        {touched.phone && errors.phone && (
                          <div
                            style={{
                              color: "red",
                              marginTop: 10,
                              maxWidth: 320,
                            }}
                          >
                            {errors.phone}
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
                              type="text"
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

                      <div className="flex-between flex-column">
                        <div className="w-100">
                          <div className="flex-between inputbox">
                            <RiKey2Fill />
                            <input
                              {...getFieldProps("confirmPassword")}
                              placeholder="Confirm Password"
                              type="text"
                            />
                          </div>
                        </div>

                        {touched.confirmPassword && errors.confirmPassword && (
                          <div
                            style={{
                              color: "red",
                              marginTop: 10,
                              maxWidth: 320,
                            }}
                          >
                            {errors.confirmPassword}
                          </div>
                        )}
                      </div>

                      <div className="flex-between justify-content-center">
                        {" "}
                        <button
                          onClick={() => submitForm()}
                          className="btn fw600 fs17 lh23"
                        >
                          {showAnimation == true ? <Loading /> : " Subscribe"}
                        </button>
                      </div>
                    </section>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
