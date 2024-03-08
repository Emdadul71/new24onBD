import AdvertisementLeftSide from "@/modules/@common/advertisement/left_side";
import AdvertisementPageTop from "@/modules/@common/advertisement/page_top";
import AdvertisementSideSm from "@/modules/@common/advertisement/side_sm";
import { Footer } from "@/modules/@common/footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const NewsSource = () => {
  return (
    <section>
      <div className="container">
        <AdvertisementPageTop className="mt-5 " />
        <div className="grid grid-cols-[160px_735px_297px] gap-[30px] max-w-[1252px] mx-auto">
          <AdvertisementLeftSide className="mt-[74px] sticky top-[70px]" />
          <div>
            <div className="mb-5">
              <h3>খবর উৎস</h3>
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

            <div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-[40px]">
                {new Array(20)?.fill(1)?.map((_, i: any) => {
                  return (
                    <Link
                      key={i}
                      href="#"
                      className="h-[80px] flex items-center justify-center border rounded-md p-4 hover:shadow-md transition-shadow "
                    >
                      <Image
                        src="/temp/source-1.png"
                        alt="Source"
                        title="Source"
                        width={140}
                        height={40}
                        className={`max-h-[45px] object-contain `}
                      />
                    </Link>
                  );
                })}
              </div>
              <div className="flex flex-col gap-[30px]">
                <div>
                  <h1 className="mb-4">
                    Stay Updated with All Bangla Newspapers in Bangladesh -
                    Complete List for Latest News!
                  </h1>
                  <p>
                    Explore a Comprehensive Collection of Online Bangla
                    Newspapers and Bengali News Agencies in Bangladesh for 24x7
                    Updates. Stay Informed with the Latest Bangla, News from the
                    Most Popular BD Newspapers: 24 Live News, BD News 24, Bangla
                    News 24, and Many More Continuously Updated Bangla News
                    Sources on 24onbd. Bangladesh, a land of vibrant culture,
                    history, and diversity, boasts a thriving newspaper industry
                    that plays a pivotal role in shaping public opinion and
                    providing essential information to its people. This article
                    delves into the rich tapestry of Bangladesh newspapers.
                    exploring their significance, influence, and the vital role
                    they continue to play in a digital age
                  </p>
                </div>
                <div>
                  <h1 className="mb-4">Bangladesh Newspaper History</h1>
                  <p>
                    Explore a Comprehensive Collection of Online Bangla
                    Newspapers and Bengali News Agencies in Bangladesh for 24x7
                    Updates. Stay Informed with the Latest Bangla, News from the
                    Most Popular BD Newspapers: 24 Live News, BD News 24, Bangla
                    News 24, and Many More Continuously Updated Bangla News
                    Sources on 24onbd. Bangladesh, a land of vibrant culture,
                    history, and diversity, boasts a thriving newspaper industry
                    that plays a pivotal role in shaping public opinion and
                    providing essential information to its people.
                  </p>
                </div>
                <div>
                  <h1 className="mb-4">Top Influence and Reach Bangla News</h1>
                  <p>
                    Explore a Comprehensive Collection of Online Bangla
                    Newspapers and Bengali News Agencies in Bangladesh for 24x7
                    Updates. Stay Informed with the Latest Bangla, News from the
                    Most Popular BD Newspapers: 24 Live News, BD News 24, Bangla
                    News 24.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <AdvertisementSideSm className="mt-[74px] sticky top-[70px]" />
            <Footer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSource;
