import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "@emailjs/browser";

import DelayedComponent from "../DelayedComponent/DelayedComponent";

const ContactBody = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <div className="">
        <div className=" flex flex-col justify-end pb-16 pl-6 lg:pl-44 border-red-500 h-80">
          <h1 className="text-4xl animate-bottom-to-top">Contact</h1>
          <p className="text-xl mt-4 animate-bottom-to-top">
            Please use this form to contact me.
          </p>
        </div>
        <div className="bg-teal-50 py-12 lg:pl-44 lg:pr-32 border-t border-teal-100 flex justify-center items-center ">
          <DelayedComponent state="animate-bottom-to-top50 ">
            <div className=" border w-80 lg:w-96 px-5 border-teal-600 bg-slate-100 lg:px-10 py-5 rounded-lg">
              <h2 className="text-xl font-bold mb-4 text-teal-600 text-center animate-bottom-to-top">
                Contact Form
              </h2>

              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
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
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({ isSubmitting }) => (
                  <Form ref={form} onSubmit={sendEmail}>
                    <div className="mb-4">
                      <label
                        htmlFor="firstName"
                        className="block font-medium mb-1 pl-1 animate-bottom-to-top"
                      >
                        First Name
                      </label>
                      <Field
                        type="text"
                        name="user_name"
                        className="form-input w-full border p-1 px-2 border-teal-600 rounded-lg animate-bottom-to-top"
                      />
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="text-red-600"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block font-medium mb-1 pl-1 animate-bottom-to-top"
                      >
                        Email Address
                      </label>
                      <Field
                        type="email"
                        name="user_email"
                        className="form-input w-full  p-1 px-2 border border-teal-600 rounded-lg animate-bottom-to-top"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-600"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="message"
                        className="block font-medium mb-1 pl-1 animate-bottom-to-top"
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
                        className="text-red-600"
                      />
                    </div>
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        value="Send"
                        className="bg-blue-500 font-semibold text-white px-4 py-2 rounded-md disabled:opacity-50 animate-bottom-to-top"
                        disabled={isSubmitting}
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </DelayedComponent>
        </div>
      </div>
    </>
  );
};

export default ContactBody;
