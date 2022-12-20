import React, { useState } from "react";
import miLogo from "../../src/assets/image 9.png";

const SignUp = () => {
  let [user, setUser] = useState({});
  let handelInputChange = (e) => {
    console.log(e.target.name);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  console.log(user);

  return (
    <div className=" h-screen w-full flex justify-center relative">
      <div className="absolute top-[50px] left-[100px] ">
        <img src={miLogo} />
      </div>
      <div className="w-[470px]  h-[550px] mt-[180px]   ">
        <div className="h-[92%] bg-[#F9FBFF] p-[25px]">
          <div className=" flex flex-col gap-[24px] h-[90%] ">
            <div className="  flex flex-col gap-[16px]">
              <h1 className="font-[700] text-[32px] text-center"> Sign Up</h1>
              <p className="text-[14px] text-[#666666]">
                Please enter the e-mail address that you receive Mirats Insights
                surveys on
              </p>
            </div>
            <div className="sign-up-form ">
              <div className="flex flex-col gap-[8px]">
                <h3 className="">First Name</h3>
                <div>
                  <input
                    name="fname"
                    type="text"
                    placeholder="Sagar"
                    onChange={(e) => {
                      handelInputChange(e);
                    }}
                  />
                  <p className="text-[#FF0000] font-[400] text-[12px] mt-[4px]">
                    Error Message
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[8px]">
                <h3>Last Name</h3>
                <div>
                  <input
                    name="lname"
                    type="text"
                    placeholder="Borude"
                    onChange={(e) => {
                      handelInputChange(e);
                    }}
                  />
                  <p className="text-[#FF0000] font-[400] text-[12px]  mt-[4px]">
                    Error Message
                  </p>
                </div>
              </div>
              <div>
                <button className=""> Next</button>
              </div>
              <div>
                <p className="text-center text-[#666666] font-[400] text-[12px]">
                  Already on Survey Portal?{" "}
                  <span className="underline cursor-pointer">Sign in </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-[8%] text-[#666666] text-[12px] flex items-end justify-center w-full">
          <nav className=" flex gap-[10px]">
            <a href="#">Terms & Conditions</a>
            <div className="border-x px-[16px]">
              <a href="#">Privacy Policy</a>
            </div>
            <a href="#">Contact support</a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
