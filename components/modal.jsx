import { Modal } from "react-bootstrap";
import React from 'react'
import * as Yup from "yup";
import { FaUser, FaUserFriends } from "react-icons/fa";
import { IoMdMail, IoIosCall } from "react-icons/io";
import { Formik, Form } from "formik";
import { RiKey2Fill } from "react-icons/ri";
import Loading from "./loading";
import {TiTick,TiCancel} from 'react-icons/ti'
import {GiCancel} from 'react-icons/gi'

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
 
export default ({
  show,
  handleClose,
  handleShow,
  showAnimation1,
  adduser,
  language,
}) => {

  const [charLength,setcharLength]=React.useState(false);
  const [lowercase,setlowercase]=React.useState(false);
  const [uppercase,setuppercase]=React.useState(false);
  const [number,setnumber]=React.useState(false);
  const [special,setspecial]=React.useState(false);
   
 const passwordValidate = value => {
     const regexNum = /\d/;
    const regexLowercase = /[a-z]/;
    const regexUppercase = /[A-Z]/;
    const specialCase = /\W|_/;
    if(regexLowercase.test(value))
    {
       
     setlowercase(true)
    }
    else
    {
      setlowercase(false)
    }
    if(regexNum.test(value))
    {
     setnumber(true)
    }
    else
    {
      setnumber(false)
    }
    if( regexUppercase.test(value))
    {
      setuppercase(true)
    }
    else
    {
      setuppercase(false)
    }
    if( specialCase.test(value))
    {
      setspecial(true)
    }
    else
    {
      setspecial(false)
    }
    
    value.length>=8
      ? setcharLength(true)   
      :  setcharLength(false)  
   
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div className="modal-main">
            <img src="img/logo3.png" />
            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "",
                password: "",
                confirmPassword: "",
                referral: "",
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
                setFieldValue,
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
                              type="password"
                              onChange={(e)=>{
                                setFieldValue("password",e.target.value)
                                passwordValidate(e.target.value)
                              }}
                            />
                          </div>
                        </div>

                        {touched.password && errors.password &&(
                          <div
                            style={{
                               
                              marginTop: 10,
                              maxWidth: 320,
                            }}
                          >
                             <div className="">
                              <div className=" " id="message">
                                <h3 className="dsofjadf">Password must contain the following:</h3>
                                <p  class="invalid" style={{color:lowercase==true?"green":"red"}}>
                                
                                {lowercase==true?<span>{<TiTick color="gren"/>}</span>:<span><GiCancel color="red"/></span> }
                                  A <b>lowercase</b> letter
                                </p>

                                <p  class="invalid" style={{color:uppercase==true?"green":"red"}}>
                                
                                {uppercase==true?<span>{<TiTick color="gren"/>}</span>:<span><GiCancel color="red"/></span> }
                                A <b>capital (uppercase)</b> letter
                                </p>
                                <p  class="invalid" style={{color:number==true?"green":"red"}}>
                                
                                {number==true?<span>{<TiTick color="gren"/>}</span>:<span><GiCancel color="red"/></span> }
                                A <b>Number</b>
                                </p>
                                <p  class="invalid" style={{color:charLength==true?"green":"red"}}>
                                
                                {charLength==true?<span>{<TiTick color="gren"/>}</span>:<span><GiCancel color="red"/></span> }
                                Minimum <b>8 characters</b>
                                </p>

                                <p  class="invalid" style={{color:special==true?"green":"red"}}>
                                
                                {special==true?<span>{<TiTick color="gren"/>}</span>:<span><GiCancel color="red"/></span> }
                                A <b>special case</b>
                                </p>

                                 
                                
                                
                              </div>
                            </div>
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
                              type="password"
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
                      {language == 0 ? (
                        <div className="flex-between flex-column">
                          <div className="w-100">
                            <div className="flex-between inputbox">
                              <FaUserFriends />
                              <input
                                {...getFieldProps("referral")}
                                placeholder="Referral Name"
                                type="text"
                              />
                            </div>
                          </div>

                          {touched.referral && errors.referral && (
                            <div
                              style={{
                                color: "red",
                                marginTop: 10,
                                maxWidth: 320,
                              }}
                            >
                              {errors.referral}
                            </div>
                          )}
                        </div>
                      ) : (
                        <></>
                      )}
                      <div className="flex-between justify-content-center">
                        {" "}
                        <button
                         type="submit"
                          className="btn fw600 fs17 lh23"
                        >
                          {showAnimation1 == true ? (
                            <div style={{ position: "relative", top: -21 }}>
                              {" "}
                              <Loading />
                            </div>
                          ) : (
                            " Subscribe"
                          )}
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
