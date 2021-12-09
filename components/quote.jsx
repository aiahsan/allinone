import React from "react";
import Icons from "../styles/Icons";
import {
  AiOutlineUser,
  AiOutlineUnorderedList,
  AiOutlineMessage,
  AiOutlineMail,
} from "react-icons/ai";
import { collection, addDoc } from "firebase/firestore";

import { useTranslation, Trans } from "react-i18next";

import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { Formik, Form } from "formik";
import { DropdownButton, Dropdown } from "react-bootstrap";
import Loading from "../components/loading";
import { db } from "../util/firebase";
import { repository } from '../utiles/repository';

import * as Yup from "yup";

const DisplayingErrorMessagesSchema = Yup.object().shape({
  email: Yup.string().required("Email Required").email(),
  interested: Yup.string().required("Field Required"),
  name: Yup.string().required("Field Required"),
});
export default function Quote({ setmessage, setshowmessage }) {
  const [showAnimation, setshowAnimation] = React.useState(false);
  function onKeyDown(keyEvent) {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
  }
  const add = async ({ email, interested, name, message, budget }) => {
    setshowAnimation(true);

     
    (async () => {
     
      const docRef = await addDoc(collection(db, "firstclass"), {
        email,
        interested,
        name,
        message,
        budget,
      })
        .then((x) => {
            (async ()=>{
              await await repository.contact({email,interested,name, message, budget});
            })()

          setmessage("Request submitted");
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
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          interested: "",
          name: "",
          message: "",
          budget: "",
        }}
        validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={async (values, { setSubmitting }) => {
          await add(values);
        }}
      >
        {({
          errors,
          touched,
          getFieldProps,
          submitForm,
          setFieldValue,
          setErrors,
          handleBlur,
          values,
        }) => {
          // cstErrors = errors;

          return (
            <Form onKeyDown={onKeyDown}>
              <section className="container quotebox">
                <div className="pos-res2">
                  <img className="pos-abs2" src="img/mr.png" />
                </div>
                <h1 className="fw600 fs33 lh54 text-center">
                {t("c1")}
                </h1>
                <div className="flex-between flex-column">
                  <div className="sb-box flex-between w-100 flex-column">
                    <div className="flex-between inputbox">
                      <AiOutlineUnorderedList color="black" />
                      <DropdownButton
                        id="dropdown-basic-button"
                        title={
                          values.interested == ""
                            ?   t("c2")
                            : values.interested
                        }
                      >
                        <Dropdown.Item
                          onClick={() => setFieldValue("interested", "Yacht")}
                        >
                          Yacht
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => setFieldValue("interested", "Car")}
                        >
                          Car
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() =>
                            setFieldValue("interested", "Company Registration")
                          }
                        >
                          Company Registration
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => setFieldValue("interested", "Hotel")}
                        >
                          Hotel
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() =>
                            setFieldValue("interested", "Restaurant")
                          }
                        >
                          Restaurant
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => setFieldValue("interested", "Flight")}
                        >
                          Flight
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => setFieldValue("interested", "Other")}
                        >
                          Other
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </div>

                  {touched.interested && errors.interested && (
                    <div
                      style={{ color: "white", marginTop: 10, maxWidth: 320 }}
                    >
                      {errors.interested}
                    </div>
                  )}
                </div>
                <div className="flex-between flex-column">
                  <div className="sb-box flex-between w-100 flex-column">
                    <div className="flex-between inputbox">
                      <AiOutlineUser color="black" />
                      <input
                        {...getFieldProps("name")}
                        placeholder={t("c3")}
                        type="text"
                      />
                    </div>
                  </div>

                  {touched.name && errors.name && (
                    <div
                      style={{ color: "white", marginTop: 10, maxWidth: 320 }}
                    >
                      {errors.name}
                    </div>
                  )}
                </div>

                <div className="flex-between flex-column">
                  <div className="sb-box flex-between w-100 flex-column">
                    <div className="flex-between inputbox">
                      <AiOutlineMail color="black" />
                      <input
                        {...getFieldProps("email")}
                        placeholder={t("c4")}
                        type="text"
                      />
                    </div>
                  </div>

                  {touched.email && errors.email && (
                    <div
                      style={{ color: "white", marginTop: 10, maxWidth: 320 }}
                    >
                      {errors.email}
                    </div>
                  )}
                </div>
                <div className="flex-between flex-column">
                  <div className="sb-box flex-between w-100 flex-column">
                    <div className="flex-between inputbox">
                      <RiMoneyDollarBoxLine color="black" />
                      <input
                        {...getFieldProps("budget")}
                        placeholder={t("c5")}
                        type="number"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-between flex-column">
                  <div className="sb-box flex-between w-100 flex-column">
                    <div className="flex-between inputbox">
                      <AiOutlineMessage color="black" />
                      <textarea
                        {...getFieldProps("message")}
                        row={5}
                        placeholder={t("c6")}
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-center">
                  {" "}
                  <button
                    type="submit"
                    className="btn fw600 fs17 lh23"
                    style={{
                      backgroundColor:
                        showAnimation == true ? "#4c7ceb" : "white",
                    }}
                  >
                    {showAnimation == true ? <Loading /> : t("c7")}
                  </button>
                </div>

                <div className="pos-res1">
                  <img className="pos-ab1" src="img/ml.png" />
                </div>
              </section>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
