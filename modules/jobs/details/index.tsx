import AdvertisementPageTop from "@/modules/@common/advertisement/page_top";
import AdvertisementSideSm from "@/modules/@common/advertisement/side_sm";
import { Footer } from "@/modules/@common/footer";
import SocialShare from "@/modules/@common/social_share";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { GoArrowRight, GoDotFill } from "react-icons/go";

const JobsDetails = () => {
  return (
    <section>
      <div className="container">
        <AdvertisementPageTop className="mt-5" />
        <div className="grid lg:grid-cols-[1fr_297px] gap-[30px]">
          <div>
            <div className="  mb-[20px] pb-[20px] border-b">
              <div className=" flex flex-col gap-3">
                <div className={`flex items-center flex-wrap gap-2 `}>
                  <Link
                    href="#"
                    className="text-xs font-medium text-secondary hover:text-secondary transition-all"
                  >
                    Marketing/Sales
                  </Link>
                  <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                  <Link
                    href="#"
                    className="text-xs font-medium hover:text-secondary transition-all"
                  >
                    bdjobs
                  </Link>
                </div>
                <div>
                  <h1 className=" text-[32px] font-semibold leading-[40px]">
                    Senior Manager /AGM (Industrial Engineering)
                  </h1>
                </div>
                <div>
                  <span className=" text-[20px] font-semibold ">
                    Bashundhara Group
                  </span>
                </div>
                <div className="inline md:inline-flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <span className=" text-secondary bg-[#D3202714] px-[13px] py-[6px] rounded-full inline">
                    Deadline: 30 Mar 2024
                  </span>
                  <div className="grid grid-cols-[auto_auto] justify-between items-center gap-4 mt-3">
                    <div className="!order-2 lg:!order-1">
                      <SocialShare sharedUrl="#" />
                    </div>

                    <button className=" btn btn-secondary !order-1 lg:!order-2">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-[#F4F4F4] px-[30px] py-[20px] flex flex-col gap-3">
              <h2 className=" mb-0 text-xl text-black">Job Summary</h2>
              <div className="flex flex-col md:flex-row items-start gap-2 lg:items-center justify-start lg:justify-between w-full">
                <div className="flex flex-col gap-1 w-full">
                  <p className=" mb-0 text-base text-[#666371]">Vacancy: 5</p>
                  <p className=" mb-0 text-base">Salary: Negotiable</p>
                </div>
                <div className=" flex flex-col gap-1  w-full">
                  <p className=" mb-0 text-base text-[#666371]">
                    Age: 28 to 40 years
                  </p>
                  <p className=" mb-0 text-base">
                    Experience: At least 4 years
                  </p>
                </div>
                <div className=" flex flex-col gap-1  w-full">
                  <p className=" mb-0 text-base text-[#666371]">
                    Location: Dhaka (Mirpur)
                  </p>
                  <p className=" mb-0 text-base">Published: 3 Mar 2024</p>
                </div>
              </div>
            </div>
            <div className="mt-[20px] flex gap-3 lg:gap-[28px]">
              <div className="self-start sticky top-[180px] hidden lg:block">
                <SocialShare
                  sharedUrl="#"
                  className={{ root: "!flex-col !items-start !justify-start" }}
                />
              </div>
              <div className=" flex flex-col gap-[30px] max-w-[700px]">
                <div className=" flex flex-col gap-4">
                  <h2 className=" text-xl font-semibold text-[#1E184E]">
                    Requirements
                  </h2>
                  <div className=" flex flex-col gap-4">
                    <p className=" mb-0 text-base font-semibold text-[#353535]">
                      Education
                    </p>
                    <p className=" mb-0 text-[18px] leading-[28px] text-[#666371] flex items-start gap-2">
                      <GoArrowRight className=" text-[24px] shrink-0	" />{" "}
                      Bachelor of Science (BSc), Diploma in Computer, HSC
                    </p>
                  </div>
                  <div className=" flex flex-col gap-4">
                    <p className=" mb-0 text-base font-semibold text-[#353535]">
                      Experience
                    </p>
                    <p className=" mb-0 text-[18px] leading-[28px] text-[#666371] flex items-start gap-2">
                      <GoArrowRight className=" text-[24px] shrink-0	" /> At
                      least 4 years
                    </p>
                    <p className=" mb-0 text-[18px] leading-[28px] text-[#666371] flex items-start gap-2">
                      <GoArrowRight className=" text-[24px] shrink-0	" />
                      The applicants should have experience in the following
                      business area(s): Software Company
                    </p>
                  </div>
                  <div className=" flex flex-col gap-4">
                    <p className=" mb-0 text-base font-semibold text-[#353535]">
                      Additional Requirements
                    </p>
                    <p className=" mb-0 text-[18px] leading-[28px] text-[#666371] flex items-start gap-2">
                      <GoArrowRight className=" text-[24px] shrink-0	" />
                      Bachelor of Science (BSc), Diploma in Computer, HSC
                    </p>
                  </div>
                </div>
                <div className=" flex flex-col gap-4">
                  <h2 className=" text-xl font-semibold text-[#1E184E]">
                    Responsibilities & Context
                  </h2>
                  <div className=" flex flex-col gap-4">
                    <p className=" mb-0 text-base font-semibold text-[#353535]">
                      Ideal Background & Job Responsibility:
                    </p>
                    <p className=" mb-0 text-[18px] leading-[28px] text-[#666371] flex items-start gap-2">
                      <GoArrowRight className=" text-[24px] shrink-0	" />{" "}
                      Bachelor of Science (BSc), Diploma in Computer, HSC
                    </p>
                    <p className=" mb-0 text-[18px] leading-[28px] text-[#666371] flex items-start gap-2">
                      <GoArrowRight className=" text-[24px] shrink-0	" /> At
                      least 4 years of experience working as an Angular
                      developer
                    </p>
                    <p className=" mb-0 text-[18px] leading-[28px] text-[#666371] flex items-start gap-2">
                      <GoArrowRight className=" text-[24px] shrink-0	" />{" "}
                      Building and implementing top-notch user interfaces using
                      JavaScript, Typescript, and the Angular framework.
                    </p>
                    <p className=" mb-0 text-[18px] leading-[28px] text-[#666371] flex items-start gap-2">
                      <GoArrowRight className=" text-[24px] shrink-0	" />
                      Experience building responsive layouts with multiple
                      front-end languages (JavaScript, HTML, CSS) and their
                      libraries
                    </p>
                    <p className=" mb-0 text-[18px] leading-[28px] text-[#666371] flex items-start gap-2">
                      <GoArrowRight className=" text-[24px] shrink-0	" />
                      Familiarity with database technologies such as SQLite and
                      MongoDB
                    </p>
                  </div>
                </div>
                <div>
                  <h2 className=" text-xl font-semibold text-[#1E184E] mb-4">
                    Skills & Expertise
                  </h2>
                  <div className=" flex  flex-wrap gap-2 lg:gap-4">
                    <span className=" text-[#717171] bg-gray-300 px-4 py-1 rounded-full">
                      Angular 12+
                    </span>
                    <span className=" text-[#717171] bg-gray-300 px-4 py-1 rounded-full">
                      ionic framework
                    </span>
                    <span className=" text-[#717171] bg-gray-300 px-4 py-1 rounded-full">
                      Typescript
                    </span>
                  </div>
                </div>
                <div className=" flex flex-col gap-4">
                  <h2 className=" text-xl font-semibold text-[#1E184E]">
                    Compensation & Other Benefits
                  </h2>
                  <div className=" flex flex-col gap-4">
                    <p className=" mb-0 text-[18px] leading-[28px] text-[#666371] flex items-start gap-2">
                      <GoArrowRight className=" text-[24px]" /> Weekly 2
                      holidays, Over time allowance
                    </p>
                    <p className=" mb-0 text-[18px] leading-[28px] text-[#666371] flex items-start gap-2">
                      <GoArrowRight className=" text-[24px]" />
                      Lunch Facilities: Partially Subsidize
                    </p>
                    <p className=" mb-0 text-[18px] leading-[28px] text-[#666371] flex items-start gap-2">
                      <GoArrowRight className=" text-[24px]" /> Salary Review:
                      Yearly
                    </p>
                    <p className=" mb-0 text-[18px] leading-[28px] text-[#666371] flex items-start gap-2">
                      <GoArrowRight className=" text-[24px]" />
                      Festival Bonus: 2
                    </p>
                  </div>
                </div>
                <div>
                  <h2 className=" text-xl font-semibold text-[#1E184E]">
                    Workplace
                  </h2>
                  <div className=" flex gap-4">
                    <p className=" mb-0 text-[18px] leading-[28px] text-[#666371] flex items-start gap-2">
                      Work at office
                    </p>
                  </div>
                </div>
                <div>
                  <h2 className=" text-xl font-semibold text-[#1E184E]">
                    Employment Status
                  </h2>
                  <div className=" flex gap-4">
                    <p className=" mb-0 text-[18px] leading-[28px] text-[#666371] flex items-start gap-2">
                      Full Time
                    </p>
                  </div>
                </div>
                <div>
                  <h2 className=" text-xl font-semibold text-[#1E184E]">
                    Job Location
                  </h2>
                  <div className=" flex gap-4">
                    <p className=" mb-0 text-[18px] leading-[28px] text-[#666371] flex items-start gap-2">
                      Anywhere in Bangladesh
                    </p>
                  </div>
                </div>
                <div>
                  <h2 className=" text-xl font-semibold text-[#1E184E]">
                    Apply Procedure
                  </h2>
                  <div className=" flex gap-4">
                    <p className=" mb-0 text-[18px] leading-[28px] text-[#666371] flex items-start gap-2">
                      Apply URL: https://www.uiu.ac.bd/career/
                    </p>
                  </div>
                </div>
                <div className=" p-4 bg-[#F4F4F4] rounded flex flex-col gap-4">
                  <h2 className=" text-xl font-semibold text-[#1E184E]">
                    Company Information
                  </h2>
                  <div className=" flex flex-col gap-2">
                    <p className=" mb-0 text-[18px] leading-[28px]">
                      Sys Dev Limited
                    </p>
                    <p className=" mb-0 text-[18px] leading-[28px]">
                      L. R. Bhaban, 1/2 (6th Floor), Outer Circular Road,
                      Malibagh, Dhaka- 1217
                    </p>
                  </div>
                </div>
                <div>
                  <h2 className=" text-xl font-semibold text-[#1E184E]">
                    Job Source
                  </h2>
                  <Link href={"/"}>www.bdjobs.com</Link>
                </div>
                <div>
                  <button className=" bg-primary text-white px-4 py-[6px] rounded">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <AdvertisementSideSm />
            <Footer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobsDetails;
