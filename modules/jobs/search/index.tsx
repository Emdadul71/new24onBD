import AdvertisementLeftSide from "@/modules/@common/advertisement/left_side";
import AdvertisementPageTop from "@/modules/@common/advertisement/page_top";
import AdvertisementSideSm from "@/modules/@common/advertisement/side_sm";
import { Footer } from "@/modules/@common/footer";
import SocialShare from "@/modules/@common/social_share";
import Link from "next/link";
import React from "react";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { TbMapPinFilled } from "react-icons/tb";

const JobSearch = () => {
  return (
    <section>
      <div className="container">
        <AdvertisementPageTop className="mt-5 " />
        <div className="grid lg:grid-cols-[160px_1fr_250px] gap-[30px] max-w-[1140px] mx-auto">
          <AdvertisementLeftSide className="sticky top-[70px] " />
          <div>
            <div className="border-b pb-5 mb-4">
              <h3 className="mb-0">Design Jobs 145657</h3>
            </div>
            {new Array(8).fill(1)?.map((_, i: any) => {
              return (
                <div key={i}>
                  <div>
                    <div
                      className={`flex items-center justify-between items-center mb-1`}
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
                    <Link href="#">
                      <h2 className="heading-six hover:text-secondary transition-all mb-[6px]">
                        Technical Manager
                      </h2>
                    </Link>
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
                  </div>
                  <div className="flex items-center gap-2 mb-[10px]">
                    <FaUserGraduate className="text-xs" />
                    <p className="mb-0 text-sm">
                      Bachelor of Business Administration (BBA) in Accounting
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-[#1E184E14] rounded-full text-sm">
                    Deadline: 30 Mar 2024
                  </span>
                  <div className="w-full bg-[#DBDADE] h-[1px] my-[15px]"></div>
                </div>
              );
            })}
          </div>
          <div className="sticky top-[70px] self-start">
            <AdvertisementSideSm />
            <Footer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSearch;
