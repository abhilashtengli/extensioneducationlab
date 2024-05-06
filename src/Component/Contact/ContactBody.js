import React, { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "@emailjs/browser";

import DelayedComponent from "../DelayedComponent/DelayedComponent";

const ContactBody = () => {
  const form = useRef();
  const [sentMessage, setSentMessage] = useState(true);
  const [show, setShow] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Extract form values
    const formData = new FormData(form.current);
    const values = Object.fromEntries(formData.entries());

    // Validate form fields
    const errors = {};
    if (!values.user_name) {
      errors.user_name = "Required";
      // console.log("required");
    }
    if (!values.user_email) {
      errors.user_email = "Required";
      // console.log("required");
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.user_email)
    ) {
      errors.user_email = "Invalid email address";
    }
    if (!values.message) {
      errors.message = "Required";
      // console.log("required");
    }

    if (Object.keys(errors).length !== 0) {
      return;
    }

    // If no errors, send the email
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_KEY,
        process.env.REACT_APP_TEMPLATE_KEY,
        form.current,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setSentMessage(true);
          setShow(true);
          setTimeout(() => {
            setSentMessage(false);
            setShow(false);
          }, 5000);

          // Reset the form
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className="">
        <div className=" flex flex-col justify-end pb-5 pl-6 lg:pl-44 border-red-500 h-52 text-teal-800">
          <h1 className="text-4xl animate-bottom-to-top">Contact</h1>
          <p className="text-xl mt-4 animate-bottom-to-top">
            Please use this form to contact me.
          </p>
        </div>
        <div className="bg-teal-50 py-12 lg:pl-44 lg:pr-32 border-t border-teal-100 flex justify-center items-center ">
          <DelayedComponent state="animate-bottom-to-top50 ">
            <div className=" border w-80 lg:w-96 px-5 border-teal-600 shadow-[0_20px_50px_hsl(180,_55%,_75%,_0.4)] bg-slate-100 lg:px-10 py-5 rounded-lg">
              {show ? (
                <h1
                  className={` ${
                    sentMessage ? "bg-green-700" : "bg-red-500"
                  }  rounded-lg w-full py-1 mb-5 text-white font-semibold text-lg text-center`}
                >
                  {sentMessage ? "Message sent ✅" : "Message Not Sent !"}
                </h1>
              ) : (
                ""
              )}
              <h2 className="text-xl font-bold mb-4 text-teal-600 text-center animate-bottom-to-top">
                Contact Form
              </h2>

              <Formik
                initialValues={{
                  user_name: "",
                  user_email: "",
                  message: "",
                }}
                validate={(values) => {
                  const errors = {};
                  if (!values.user_name) {
                    errors.user_name = "Required";
                  }
                  if (!values.user_email) {
                    errors.user_email = "Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.user_email
                    )
                  ) {
                    errors.user_email = "Invalid email address";
                  }
                  if (!values.message) {
                    errors.message = "Required";
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  setTimeout(() => {
                    resetForm();
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({ isSubmitting }) => (
                  <Form ref={form} onSubmit={sendEmail}>
                    <div className="mb-4">
                      <label
                        htmlFor="user_name"
                        className="block font-medium mb-1 pl-1 text-teal-800 animate-bottom-to-top"
                      >
                        Name
                      </label>
                      <Field
                        type="text"
                        name="user_name"
                        className="form-input w-full border p-1 px-2 border-teal-600 rounded-lg animate-bottom-to-top"
                      />

                      <ErrorMessage
                        name="user_name"
                        component="div"
                        className="text-red-600 pl-1"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="user_email"
                        className="block font-medium mb-1 pl-1 text-teal-800 animate-bottom-to-top"
                      >
                        Email Address
                      </label>
                      <Field
                        type="email"
                        name="user_email"
                        className="form-input w-full  p-1 px-2 border border-teal-600 rounded-lg animate-bottom-to-top"
                      />
                      <ErrorMessage
                        name="user_email"
                        component="div"
                        className="text-red-600 pl-1"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="message"
                        className="block font-medium mb-1 pl-1 text-teal-800 animate-bottom-to-top"
                      >
                        Message
                      </label>
                      <Field
                        as="textarea"
                        name="message"
                        className="form-textarea w-full  p-1 px-2 border border-teal-600 rounded-lg animate-bottom-to-top"
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="text-red-600 pl-1"
                      />
                    </div>
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        value="Send"
                        className="disabled:opacity-50 animate-bottom-to-top  px-4 py-1 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-transparent hover:border-teal-500  border-2  border-teal-600 "
                        disabled={isSubmitting}
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
              <h1 className="text-center text-xs mt-5 text-teal-800">
                Email : agmbt20@gmail.com
              </h1>
            </div>
          </DelayedComponent>
        </div>
      </div>
    </>
  );
};

export default ContactBody;
