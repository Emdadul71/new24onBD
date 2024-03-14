"use client";

import { useState } from "react";
import { FiEdit } from "react-icons/fi";

const Personalinfo = ({ id }: any) => {
  const [divisionId, setDivisionId] = useState();
  const [districtId, setDistrictId] = useState();

  const divisionsQueryParams: any = {
    status: "ACTIVE",
  };

  const districtQueryParams: any = {
    divisionId: divisionId,
    status: "ACTIVE",
  };
  const upazilaQueryParams: any = {
    divisionId: divisionId,
    districtId: districtId,
    status: "ACTIVE",
  };

  return (
    <>
      <section>
        <div className="container">
          <div className=" p-[30px] border">
            <div className=" flex justify-between items-start mb-[30px]">
              <div className=" flex flex-col gap-[6px]">
                <h1 className=" mb-0 text-[26px] font-semibold leading-9">
                  Personal Info
                </h1>
                <p className=" text-[15px] leading-6 mb-0">
                  Basic info, for a better experience
                </p>
              </div>
              <button
                className={
                  "flex gap-3 items-center text-[#000062] text-[15px] font-medium leading-6 hover:bg-primary px-3 py-2 rounded hover:text-white transition-all"
                }
              >
                <FiEdit /> Edit
              </button>
            </div>

            <div className=" grid lg:grid-cols-2 gap-[24px] items-center">
              <div className="form_group relative">
                <label htmlFor="">
                  Full Name <span className="astrisk">*</span>
                </label>
                <div className="relative">
                  <input name="fullName" placeholder="Full Name" />
                </div>
              </div>
              <div className="form_group relative">
                <label htmlFor="">
                  User Name <span className="astrisk">*</span>
                </label>

                <div className="relative">
                  <input
                    disabled={true}
                    name="username"
                    placeholder="User Name"
                  />
                </div>
              </div>
              <div className="form_group relative">
                <label htmlFor="">
                  E-mail<span className="astrisk">*</span>
                </label>

                <div className="relative">
                  <input disabled={true} name="email" placeholder="E-mail" />
                </div>
              </div>
              <div className="form_group relative">
                <label htmlFor="">Mobile</label>

                <div className="relative">
                  <input name="mobile" placeholder="Mobile" />
                </div>
              </div>
            </div>
            <div className=" mt-5 w-full flex gap-4 justify-end p-5">
              <button
                type="submit"
                // onClick={handleSubmit}
                className="bg-[#00006D] text-white  text-[15px] font-medium leading-6 hover:bg-primary px-3 py-2 rounded hover:text-white transition-all"
              >
                Update
              </button>
              <button className=" text-[#000062] text-[15px] font-medium leading-6 hover:bg-primary px-3 py-2 rounded hover:text-white transition-all">
                cancel
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Personalinfo;
