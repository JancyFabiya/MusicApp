import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <section className="max-h-screen overflow-y-hidden">
        <div className="container px-4 mx-auto">
          {/* <div className="max-w-5xl mx-auto"> */}
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
                  {/* <div className="flex"> */}

                  {/* </div> */}
                </div>
                {/* <h4 className="text-gray-400">Mobile Number</h4> */}

                <div className="flex items-center pl-6 w-full mb-6 border border-slate-400 bg-white rounded-lg log-box">
                  <FiPhoneCall />
                  {/* Password */}
                  <input
                    value=""
                    className="w-full pr-6 pl-4 py-4 font-bold placeholder-gray-300 rounded-r-full focus:outline-none"
                    type="phonenumber"
                    placeholder=" +91 45692 36562"
                  />
                </div>
                {/* <div className="flex flex-col item-center justify-center"> */}
                {/* <div> */}
                <Link to="/otp">
                  <button
                    type="submit"
                    className="py-4 w-full bg-[#7e22ce] hover:bg-[#9333ea] text-white font-bold rounded-lg transition duration-200"
                  >
                    Sign in
                  </button>
                </Link>

                {/* </div> */}

                {/* </div> */}
              </div>
            </div>
          {/* </div> */}
        </div>
      </section>
    </>
  );
};

export default SignIn;
