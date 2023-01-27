import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginAction } from "../redux/slices/Login/loginSlices";

//Form schema
const formSchema = Yup.object({
  phoneNumber: Yup.string().required("Phone number is required"),
});

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("login");

  //formik
  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
    },
    onSubmit: (values) => {
      //dispath the action
      console.log("111");

      console.log(values);
      dispatch(loginAction(values));
    },
    validationSchema: formSchema,
  });

  return (
    <>
      <section className="max-h-screen overflow-y-hidden">
        <div className="container px-4 mx-auto">
          <div class="flex h-screen overflow-y-hidden">
            <div class="m-auto w-full md:w-[50%] lg:w-[40%]">
              <div className="flex flex-col  mb-10 sm:position ">
                <div>
                  <h3 className=" text-2xl font-bold font-heading  text-purple-700">
                    {/* Header */}
                    Sign In
                  </h3>
                </div>
                <div>
                  <h4>
                    Please enter your mobile number to login. We will send an
                    OTP to verify your number.
                  </h4>
                </div>
              </div>
              <form onSubmit={formik.handleSubmit}>
                <div className="flex items-center pl-6 w-full mb-6 border border-slate-400 bg-white rounded-lg log-box">
                  <FiPhoneCall />
                  <input
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange("phoneNumber")}
                    onBlur={formik.handleBlur("phoneNumber")}
                    className="w-full pr-6 pl-4 py-4 font-bold placeholder-gray-300 rounded-r-full focus:outline-none"
                    type="phonenumber"
                    placeholder=" +91 45692 36562"
                  />
                </div>
                {/* Err message */}
                <div className="text-red-400 mb-2">
                  {formik.touched.phoneNumber && formik.errors.phoneNumber}
                </div>
                <Link to="/otp">
                  <button
                    type="submit"
                    className="py-4 w-full bg-[#7e22ce] hover:bg-[#9333ea] text-white font-bold rounded-lg transition duration-200"
                  >
                    Sign in
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
