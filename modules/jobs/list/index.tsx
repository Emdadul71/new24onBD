import AdvertisementLeftSide from "@/modules/@common/advertisement/left_side";
import AdvertisementPageTop from "@/modules/@common/advertisement/page_top";
import AdvertisementSideSm from "@/modules/@common/advertisement/side_sm";
import { Footer } from "@/modules/@common/footer";
import SocialShare from "@/modules/@common/social_share";
import Link from "next/link";
import React from "react";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaUserGraduate } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import { TbMapPinFilled } from "react-icons/tb";

const JobList = () => {
  return (
    <>
      <section>
        <AdvertisementPageTop className="mt-5" />
        <div className="bg-[#ededf1] pt-10 pb-[120px]">
          <div className="max-w-[688px] mx-auto flex flex-col justify-center items-center">
            <h1 className="text-primary mb-2">সঠিক চাকরি খুঁজুন</h1>
            <p className="text-base text-[#353535] mb-1">
              41819 Jobs are available
            </p>
            <div className="mb-5">
              <ul className="flex items-center gap-2">
                <li>
                  <Link href="">হোম</Link>
                </li>
                <li>
                  <RiArrowRightSLine className="text-lg" />
                </li>
                <li>
                  <Link href="">চাকুরি</Link>
                </li>
              </ul>
            </div>
            <div className="flex w-full ">
              <div className="w-full relative">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter skills / designation / companies"
                  className="w-full py-[10px] rounded-l-md focus:outline-none pl-[44px] pr-4"
                />
                <CiSearch className="absolute top-[50%] -translate-y-[50%] left-5 text-lg" />
              </div>
              <div className="w-[50%] relative">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter location"
                  className="w-full py-[10px] rounded-r-md focus:outline-none pl-[20px] pr-[26px]"
                />
                <span className="absolute top-[50%] -translate-y-[50%] left-1 text-lg">
                  |
                </span>
                <button className="btn btn-secondary absolute top-[50%] -translate-y-[50%] right-2 text-lg !py-[2px] px-2">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-[20px] max-w-[1062px] mx-auto py-[30px] px-[40px] bg-white mt-[-80px] rounded-md shadow-[0_6px_10px_0px_rgba(57,57,57,0.1)]">
          <div>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="#" className="flex gap-1">
                  <RiArrowRightSLine className="text-lg" />
                  <p className="text-[15px] font-normal leading-[18px] mt-[2px] mb-0">
                    Accounting/Finance (350)
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex gap-1">
                  <RiArrowRightSLine className="text-lg" />
                  <p className="text-[15px] font-normal leading-[18px] mt-[2px] mb-0">
                    Bank/ Non-Bank Fin. Institution (52)
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex gap-1">
                  <RiArrowRightSLine className="text-lg" />
                  <p className="text-[15px] font-normal leading-[18px] mt-[2px] mb-0">
                    Supply Chain/ Procurement (92)
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex gap-1">
                  <RiArrowRightSLine className="text-lg" />
                  <p className="text-[15px] font-normal leading-[18px] mt-[2px] mb-0">
                    Accounting/Finance (350)
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex gap-1">
                  <RiArrowRightSLine className="text-lg" />
                  <p className="text-[15px] font-normal leading-[18px] mt-[2px] mb-0">
                    Bank/ Non-Bank Fin. Institution (52)
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex gap-1">
                  <RiArrowRightSLine className="text-lg" />
                  <p className="text-[15px] font-normal leading-[18px] mt-[2px] mb-0">
                    Supply Chain/ Procurement (92)
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex gap-1">
                  <RiArrowRightSLine className="text-lg" />
                  <p className="text-[15px] font-normal leading-[18px] mt-[2px] mb-0">
                    Accounting/Finance (350)
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex gap-1">
                  <RiArrowRightSLine className="text-lg" />
                  <p className="text-[15px] font-normal leading-[18px] mt-[2px] mb-0">
                    Bank/ Non-Bank Fin. Institution (52)
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex gap-1">
                  <RiArrowRightSLine className="text-lg" />
                  <p className="text-[15px] font-normal leading-[18px] mt-[2px] mb-0">
                    Supply Chain/ Procurement (92)
                  </p>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="#" className="flex gap-1">
                  <RiArrowRightSLine className="text-lg" />
                  <p className="text-[15px] font-normal leading-[18px] mt-[2px] mb-0">
                    Accounting/Finance (350)
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex gap-1">
                  <RiArrowRightSLine className="text-lg" />
                  <p className="text-[15px] font-normal leading-[18px] mt-[2px] mb-0">
                    Bank/ Non-Bank Fin. Institution (52)
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex gap-1">
                  <RiArrowRightSLine className="text-lg" />
                  <p className="text-[15px] font-normal leading-[18px] mt-[2px] mb-0">
                    Supply Chain/ Procurement (92)
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex gap-1">
                  <RiArrowRightSLine className="text-lg" />
                  <p className="text-[15px] font-normal leading-[18px] mt-[2px] mb-0">
                    Accounting/Finance (350)
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex gap-1">
                  <RiArrowRightSLine className="text-lg" />
                  <p className="text-[15px] font-normal leading-[18px] mt-[2px] mb-0">
                    Bank/ Non-Bank Fin. Institution (52)
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex gap-1">
                  <RiArrowRightSLine className="text-lg" />
                  <p className="text-[15px] font-normal leading-[18px] mt-[2px] mb-0">
                    Supply Chain/ Procurement (92)
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex gap-1">
                  <RiArrowRightSLine className="text-lg" />
                  <p className="text-[15px] font-normal leading-[18px] mt-[2px] mb-0">
                    Accounting/Finance (350)
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex gap-1">
                  <RiArrowRightSLine className="text-lg" />
                  <p className="text-[15px] font-normal leading-[18px] mt-[2px] mb-0">
                    Bank/ Non-Bank Fin. Institution (52)
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex gap-1">
                  <RiArrowRightSLine className="text-lg" />
                  <p className="text-[15px] font-normal leading-[18px] mt-[2px] mb-0">
                    Supply Chain/ Procurement (92)
                  </p>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="#" className="flex gap-1">
                  <RiArrowRightSLine className="text-lg" />
                  <p className="text-[15px] font-normal leading-[18px] mt-[2px] mb-0">
                    Accounting/Finance (350)
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex gap-1">
                  <RiArrowRightSLine className="text-lg" />
                  <p className="text-[15px] font-normal leading-[18px] mt-[2px] mb-0">
                    Bank/ Non-Bank Fin. Institution (52)
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex gap-1">
                  <RiArrowRightSLine className="text-lg" />
                  <p className="text-[15px] font-normal leading-[18px] mt-[2px] mb-0">
                    Supply Chain/ Procurement (92)
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex gap-1">
                  <RiArrowRightSLine className="text-lg" />
                  <p className="text-[15px] font-normal leading-[18px] mt-[2px] mb-0">
                    Accounting/Finance (350)
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex gap-1">
                  <RiArrowRightSLine className="text-lg" />
                  <p className="text-[15px] font-normal leading-[18px] mt-[2px] mb-0">
                    Bank/ Non-Bank Fin. Institution (52)
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex gap-1">
                  <RiArrowRightSLine className="text-lg" />
                  <p className="text-[15px] font-normal leading-[18px] mt-[2px] mb-0">
                    Supply Chain/ Procurement (92)
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex gap-1">
                  <RiArrowRightSLine className="text-lg" />
                  <p className="text-[15px] font-normal leading-[18px] mt-[2px] mb-0">
                    Accounting/Finance (350)
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex gap-1">
                  <RiArrowRightSLine className="text-lg" />
                  <p className="text-[15px] font-normal leading-[18px] mt-[2px] mb-0">
                    Bank/ Non-Bank Fin. Institution (52)
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex gap-1">
                  <RiArrowRightSLine className="text-lg" />
                  <p className="text-[15px] font-normal leading-[18px] mt-[2px] mb-0">
                    Supply Chain/ Procurement (92)
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid  lg:grid-cols-[160px_1fr_297px] gap-[30px] max-w-[1140px] mx-auto">
            <AdvertisementLeftSide />
            <div>
              <div className="border-b pb-5 mb-4">
                <p className="mb-0">
                  বিস্তারিত দেখতে চাকরির শিরোনামে ক্লিক করুন
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-[30px]">
                {new Array(8).fill(1)?.map((_, i: any) => {
                  return (
                    <div key={i}>
                      <div
                        className={`flex items-center justify-between items-center mb-1 `}
                      >
                        <div className={`flex items-center flex-wrap gap-2 `}>
                          <Link
                            href=""
                            className="text-xs font-medium text-secondary hover:text-secondary transition-all"
                          >
                            Marketing/Sales
                          </Link>
                          <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                          <Link
                            href=""
                            className="text-xs font-medium hover:text-secondary transition-all"
                          >
                            bdjobs
                          </Link>
                        </div>

                        <SocialShare sharedUrl="#" />
                      </div>
                      <Link
                        href="/jobs/technical-manager"
                        className="text-inherite"
                      >
                        <h2 className="heading-six hover:text-secondary transition-all mb-[6px]">
                          Technical Manager
                        </h2>

                        <p className="text-sm font-medium mb-2">
                          Bashundhara Group
                        </p>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="flex items-center gap-2">
                            <TbMapPinFilled />
                            <p className="mb-0 text-sm">Gulshan, Dhaka</p>
                          </div>
                          <div className="flex items-center gap-[10px]">
                            <BsFillBriefcaseFill className="text-sm" />
                            <p className="mb-0 text-sm">At least 3 years</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mb-[10px]">
                          <FaUserGraduate className="text-xs" />
                          <p className="mb-0 text-sm">
                            Bachelor of Business Administration (BBA) in
                            Accounting
                          </p>
                        </div>
                        <span className="px-3 py-1 bg-[#1E184E14] rounded-full text-sm">
                          Deadline: 30 Mar 2024
                        </span>
                      </Link>
                      <div className="w-full bg-[#DBDADE] h-[1px] my-[15px]"></div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <AdvertisementSideSm />
              <Footer />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobList;
