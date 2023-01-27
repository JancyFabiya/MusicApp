import React from "react";
import { Link } from "react-router-dom";

const OTPpage = () => {
  return (
    <>
      <section className="max-h-screen overflow-y-hidden">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <div class="flex h-screen overflow-y-hidden">
              <div class="m-auto">
                <div className="flex flex-col items-center justify-center mb-10">
                  <div>
                    <h3 className=" text-2xl font-bold font-heading uppercase text-purple-700">
                      {/* Header */}
                      OTP Verification
                    </h3>
                  </div>
                  <div>
                    <h4>
                      We have sent and OTP to +919889032134. Please enter the
                      code recived to verify.
                    </h4>
                  </div>
                  {/* <div className="flex"> */}

                  {/* </div> */}
                </div>
                <div class="grid grid-cols-4 gap-4 place-items-stretch h-56 ">
                  <input className="border border-slate-400 rounded-lg h-[5rem] items-center justify-center" />
                  <input className="border border-slate-400 rounded-lg h-[5rem]" />
                  <input className="border border-slate-400 rounded-lg h-[5rem]" />
                  <input className="border border-slate-400 rounded-lg h-[5rem]" />
                </div>

                <Link to="/songs">
                  <button
                    type="submit"
                    className="py-4 w-full bg-[#7e22ce] hover:bg-[#9333ea] text-white font-bold rounded-lg transition duration-200"
                  >
                    Verify
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OTPpage;
