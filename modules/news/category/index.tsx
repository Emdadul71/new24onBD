"use client";
import { normalizedText } from "@/helpers/utils";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import NewsCard from "@/modules/@common/@layout/news-card";
import AdvertisementLeftSide from "@/modules/@common/advertisement/left_side";
import AdvertisementPageTop from "@/modules/@common/advertisement/page_top";
import AdvertisementSideSm from "@/modules/@common/advertisement/side_sm";
import { Footer } from "@/modules/@common/footer";
import Skeleton from "@/modules/@common/skeleton";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { PiMapPin } from "react-icons/pi";
import { RiArrowRightSLine } from "react-icons/ri";

const newsData = [
  {
    imgSrc: "/temp/news-card-22-alter.webp",
    title:
      "ধানমন্ডির টুইন পিক ভবনের রুফটপ রেস্তোরাঁ ভাঙল রাজউক, ১২ রেস্তোরাঁ সিলগালা ধানমন্ডির টুইন পিক ভবনের রুফটপ রেস্তোরাঁ ভাঙল রাজউক, ১২ রেস্তোরাঁ সিলগালা",
    desc: "রাজধানীর ধানমন্ডির সাতমসজিদ সড়কের গাউসিয়া টুইন পিক ভবনে একটি রুফটপ রেস্তোরাঁ ভেঙে ফেলা হয়েছে। এ ছাড়া ওই ভবনের ১২টি রেস্তোরাঁ সিলগালা করে দিয়েছে রাজধানী উন্নয়ন কর্তৃপক্ষ। নির্বাহী ম্যাজিস্ট্রেট বলছেন, ভবনটিতে অফিস করার অনুমতি থাকলেও রেস্তোরাঁ করার অনুমতি ছিল না। গত ২৩ মে রাজউক এই ভবন পরিদর্শনে এসে নোটিশ দিয়েছিল। আজ সোমবার রাজউকের অঞ্চল–৩–এর পরিচালক ও নির্বাহী ম্যাজিস্ট্রেট তাজিনা সারোয়ার এই অভিযান পরিচালনা করেন। বেলা ১১টার পর অভিযান শুরু হয়। তবে এর আগেই ভবনের রেস্তোরাঁগুলো বন্ধ ছিল।",
    date: "৫ জুলাই, ২০২২",
  },

  {
    imgSrc: "/temp/news-card-22-alter.webp",

    title:
      "অগ্নিঝুঁকি রোধে নির্দেশনার বাস্তবায়ন নেই, মাইকিং করে দায়িত্ব শেষ সমিতির",
    desc: "বিপণিকেন্দ্রগুলোকে অগ্নিদুর্ঘটনা ঝুঁকিমুক্ত রাখতে চট্টগ্রাম জেলা প্রশাসন সপ্তাহখানেক আগে ১১ দফা নির্দেশনা দেয়। কিন্তু এসব নির্দেশনার কোনোটি বাস্তবায়ন হয়নি। বিপণিকেন্দ্রভিত্তিক সমিতিগুলো অগ্নিঝুঁকির বিষয়ে শুধু মাইকিং করে দায়িত্ব শেষ করছে। অগ্নিঝুঁকির বিষয়ে জেলা প্রশাসন গত ১০ এপ্রিল নগরের বিপণিকেন্দ্রগুলোর মালিক ও চট্টগ্রাম চেম্বার অব কমার্স নেতাদের সঙ্গে বৈঠক করে। বৈঠকে জেলা প্রশাসন ১১টি নির্দেশনা দেয়।",
  },
  {
    imgSrc: "/temp/fuel.webp",

    title: "বেশি কমবে অকটেন ও পেট্রলের দাম",
    desc: "বিশ্ববাজারের সঙ্গে সামঞ্জস্য রেখে জ্বালানি তেলের মূল্য নির্ধারণ করতে যাচ্ছে সরকার। প্রতি মাসেই নতুন দাম ঘোষণা করা হবে। শিগগিরই চলতি মার্চের জন্য নির্ধারিত দামের প্রজ্ঞাপন জারি হতে পারে। এতে ডিজেলের দাম কমতে পারে প্রতি লিটারে ৪ টাকা। তবে অকটেন ও পেট্রলের দাম প্রতি লিটারে ১৫ টাকা কমানো হতে পারে। ",
  },
  {
    imgSrc: "/temp/news-card-6.webp",

    title: "অর্থনীতির চ্যালেঞ্জ ৬ সূচকে: এমসিসিআই",
    desc: "দেশীয় অর্থনীতির নয়টি প্রধান সূচকের মধ্যে ছয়টি নিয়ে নতুন সরকার বড় ধরনের চ্যালেঞ্জের মুখে রয়েছে। সূচক ছয়টি হচ্ছে বৈদেশিক মুদ্রার রিজার্ভ বা মজুত, আমদানির পরিমাণ, দেশীয় ঋণ, রপ্তানি প্রত্যাবাসন, খাদ্য মজুত ও মূল্যস্ফীতি। মূলত বৈশ্বিক ও স্থানীয় প্রতিকূলতাই এ পরিস্থিতির জন্য দায়ী। ব্যবসায়ীদের শীর্ষস্থানীয় সংগঠন মেট্রোপলিটন চেম্বার অব কমার্স অ্যান্ড ইন্ডাস্ট্রি (এমসিসিআই) তাদের ত্রৈমাসিক পর্যালোচনায় এমন অভিমত দিয়েছে। এমসিসিআই বলেছে, সরকার অর্থনৈতিক পতন মোকাবিলায় এরই মধ্যে দ্রুত ও দৃঢ় পদক্ষেপ নিয়েছে। তবে পরিস্থিতির উন্নয়নে আরও ",
  },
  {
    imgSrc: "/temp/news-card-7cr.webp",
    title: "মাঠে ফিরেই আবার রোনালদোকে শুনতে হলো ‘মেসি-মেসি’ স্লোগান",
    desc: "লা লিগায় লিওনেল মেসির সঙ্গে প্রায় এক দশকের দ্বৈরথে যতি টেনে ক্রিস্টিয়ানো রোনালদো রিয়াল মাদ্রিদ ছেড়েছেন ২০১৮ সালে। এখন তো দুজনের একজনও ইউরোপের ফুটবলেই নেই। রোনালদো সৌদি আরবে আর মেসি মার্কিন-মুলুকে। মাঠে দুজন মুখোমুখি হন কালেভদ্রে, কখনো কোনো প্রীতি ম্যাচে। মেসি আর রোনালদোর দুজন বিশ্বের দুই প্রান্তে ফুটবল খেললেও তাঁদের পুরোনো দ্বৈরথের ঝাঁজ এখনো রয়ে গেছে ভক্তদের মনে। আর সেই ঝাঁজটা মাঝেমধ্যেই টের পাচ্ছেন রোনালদো। সৌদি আরবের বিভিন্ন মাঠে তাঁকে খ্যাপাতে প্রতিপক্ষ দলের সমর্থকেরা কখনো কখনো ‘মেসি, মেসি’ স্লোগান দেন।",
  },
  {
    imgSrc: "/temp/news-card-8.webp",

    title: "ইলন মাস্ক নন, বিশ্বের শীর্ষ ধনী এখন জেফ বেজোস",
    desc: "বিশ্বের সবচেয়ে ধনী ব্যক্তিদের তালিকায় শীর্ষ অবস্থান হারিয়েছেন বৈদ্যুতিক গাড়ি নির্মাতা প্রতিষ্ঠান টেসলা ও টুইটারের প্রধান নির্বাহী কর্মকর্তা (সিইও) ইলন মাস্ক। এই তালিকায় শীর্ষে উঠেছেন বিশ্বের সবচেয়ে বড় ই-কমার্স সাইট অ্যামাজনের প্রতিষ্ঠাতা জেফ বেজোস। ব্লুমবার্গ বিলিয়নিয়ারস ইনডেক্সে গতকাল সোমবার এই রদবদল হয়েছে। জানা গেছে, নয় মাসের বেশি সময় পর ধনী ব্যক্তিদের তালিকায় শীর্ষ অবস্থান হারালেন ইলন মাস্ক। আর প্রথমবারের মতো এই তালিকায় সবার ওপরে বেজোসের নাম উঠল।",
  },
  {
    imgSrc: "/temp/news-card-9.webp",

    title: "অস্ত্রের প্রতি বিশেষ আকর্ষণ ছিল শিক্ষক রায়হানের, কিনেছেনও: ডিবি",
    desc: "সিরাজগঞ্জ ডিবির পরিদর্শক জুলহাজ উদ্দীন প্রথম আলোকে বলেন, গুলিবিদ্ধ শিক্ষার্থী আরাফাত আমিনের বাবা বগুড়া শহরের নাটাইপাড়া ধানসিঁড়ি এলাকার আবদুল্লাহ আল আমিনের করা মামলায় শিক্ষক রায়হান শরীফকে গ্রেপ্তার দেখানো হয়েছে। তাঁকে গ্রেপ্তারের পর তাঁর মুঠোফোন ঘেঁটে ইন্টারনেট থেকে ডাউনলোড করা অত্যাধুনিক বিদেশি পিস্তলের বহু ছবি পাওয়া গেছে। আরও অস্ত্র আছে কি না, খোঁজ নিতে গতকাল তাঁকে নিয়ে তাঁর বিএ কলেজ রোডের প্রফেসর গার্ডেন নামের বাসায় অভিযান চালানো হয়। তবে বাসা থেকে নতুন কোনো অস্ত্র উদ্ধার হয়নি।",
  },
  {
    imgSrc: "/temp/news-card-11.webp",

    title: "পাখিই তাঁর স্বজন, পাখিই পরিবারের সদস্য",
    desc: "শুধু পাখি নয়, যেকোনো প্রাণীর প্রতি আকাশকলি দাসের ভালোবাসা ছোটবেলা থেকেই। ছোটবেলা থেকেই তাঁর নেশা ছিল রাস্তা থেকে বিপদে পড়া কুকুর ও বিড়াল বাড়িতে এনে আশ্রয় দেওয়া। ১০-১৫টি করে কুকুর ও বিড়াল সব সময় থাকে তাঁর বাড়িতে। ৪৫ থেকে ৫০ বছর আগের কথা তুলে ধরেন আকাশকলি। তিনি জানান, পৈতৃক সূত্রে তিনি যে বাড়িটি পেয়েছেন, তার বেশির ভাগই জঙ্গলে ভরা। সেখানে রয়েছে বিভিন্ন প্রজাতির বড় বড় গাছ। সেই সব গাছে পাখির ভিড় লেগেই থাকত। এসব পাখির প্রতি চোখ পড়ে শিকারিদের। বিষয়টি বুঝতে পেরে তিনি পাহারা দেওয়া শুরু করেন। পরে শিকারিরা আর আসতে সাহস করেননি। এরপর তিনি পাখিদের খাবারের ব্যবস্থা করেন। ভাত রেঁধে ভাত রেঁধে গাছের নিচে বেশ কিছুটা অংশজুড়ে কলাগাছের পাতায় পাখির জন্য রাখতে শুরু করেন। নিরাপদ আশ্রয় ও খাবার পেয়ে পাখির সংখ্যা দিন দিন বেড়েছে। আকাশকলি এখনো পাখিদের প্রতিদিন খাবারের ব্যবস্থা করে যাচ্ছেন।",
  },
  {
    imgSrc: "/temp/news-card-10.webp",
    title:
      "কথা বলা ল্যাপটপের সাহায্য নিয়ে দৃষ্টিপ্রতিবন্ধী শিক্ষার্থী স্নাতক হলেন",
    desc: " মার্কিন সংবাদপত্র লস অ্যাঞ্জেলেস টাইমসের একটি প্রতিবেদনে বলা হয়, দৃষ্টিপ্রতিবন্ধী এক শিক্ষার্থী তোশিবার টি১০০০ টকিং ল্যাপটপের সুবিধা নিয়ে বিশ্ববিদ্যালয়ে তাঁর পড়াশোনা শেষ করেছেন এবং ডিগ্রি অর্জন করতে সক্ষম হয়েছেন। ইউনিভার্সিটি অব ক্যালিফোর্নিয়া লস অ্যাঞ্জেলেসে (ইউসিএলএ) কোর্স সম্পন্ন করতে এই ল্যাপটপ তাঁকে সহযোগিতা করে। ",
  },
];
const CategoryListing = () => {
  const dimension = useWindowDimensions();

  return (
    <>
      <section className="pt-4 pb-5">
        <div className="md:container">
          <AdvertisementPageTop className="mt-5 px-5 lg:px-0" />
          <div className="flex flex-col gap-2 lg:gap-2 mb-5 px-5 md:px-0">
            <h3>বাংলাদেশ</h3>
            <div className="flex">
              <ul className="flex items-center gap-2">
                <li>
                  <Link href="#" className=" mb-0 text-[16px] leading-[21px]">
                    রাজধানী
                  </Link>
                </li>
                <li>
                  <GoDotFill className=" text-[10px]" />
                </li>
                <li>
                  <Link href="#" className=" mb-0 text-[16px] leading-[21px]">
                    জেলা
                  </Link>
                </li>
                <li>
                  <GoDotFill className="text-[10px]" />
                </li>
                <li>
                  <Link href="#" className=" mb-0 text-[16px] leading-[21px]">
                    করোনাভাইরাস
                  </Link>
                </li>
                <li>
                  <GoDotFill className="text-[10px]" />
                </li>
                <li>
                  <Link href="#" className=" mb-0 text-[16px] leading-[21px]">
                    অপরাধ{" "}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex">
              <ul className="flex items-center gap-2">
                <li>
                  <Link href="#" className=" mb-0 text-[16px] leading-[21px]">
                    হোম
                  </Link>
                </li>
                <li>
                  <RiArrowRightSLine className="text-xl" />
                </li>
                <li>
                  <Link href="#" className=" mb-0 text-[16px] leading-[21px]">
                    বাংলাদেশ{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_250px] lg:grid-cols-[1fr_297px] md:gap-[15px] lg:gap-[30px]">
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-3 lg:gap-4">
                {newsData?.slice(4)?.map((item: any, i: any) => {
                  const isFirst = i == 0;
                  const isSecond = i == 1;
                  return (
                    <>
                      <NewsCard
                        key={i}
                        data={item}
                        classes={{
                          root: isFirst
                            ? " md:grid-cols-1 md:col-span-2 !relative mb-4 md:mb-0"
                            : isSecond
                            ? "grid-cols-[118px_1fr] md:grid-cols-1 self-start gap-3 px-5 md:px-0"
                            : "px-5 md:px-0 grid-cols-[118px_1fr] md:grid-cols-1 self-start gap-3",
                          ImageWrapper: isFirst
                            ? "h-[260px] md:h-[360px] lg:h-[372px] !rounded-none md:!rounded-md"
                            : "h-[70px] md:h-[220px] lg:h-[166px]",
                          ImageStyle: isFirst
                            ? "!rounded-none md:!rounded-md"
                            : "",
                          title: isFirst
                            ? "text-base lg:text-[28px] lg:leading-9 text-white"
                            : "text-sm leading-[18px] md:heading-three",
                          desc: isFirst
                            ? "!hidden"
                            : isSecond
                            ? "!hidden"
                            : "!hidden md:flex !line-clamp-2",
                          date: isFirst ? "!hidden" : "!text-xs md:text-[13px]",
                          body: isFirst
                            ? "!absolute bottom-[20px] left-[26px] z-10 text-white"
                            : "",
                          social: "!hidden",
                          overlay: isFirst ? "!block" : "",
                        }}
                      />
                      {dimension?.width < 768 && i != 0 && (
                        <div className="w-full h-[1px] bg-[#DBDADE] my-[15px]"></div>
                      )}

                      {dimension?.width < 768 && i == 0 && (
                        <div className="p-[26px] border flex flex-col gap-3  rounded-md mb-4 mx-5">
                          <div className="flex items-center gap-3 mb-[26px]">
                            <PiMapPin className="text-xl text-secondary" />
                            <h3>আমার এলাকার খবর</h3>
                          </div>

                          <select
                            name=""
                            id=""
                            className="w-full border p-1 px-3 rounded-md"
                          >
                            <option>বিভাগ</option>
                            <option>বিভাগ</option>
                            <option>বিভাগ</option>
                          </select>
                          <select
                            name=""
                            id=""
                            className="w-full border p-1 px-3 rounded-md"
                          >
                            <option>জেলা</option>
                            <option>জেলা</option>
                            <option>জেলা</option>
                          </select>
                          <select
                            name=""
                            id=""
                            className="w-full border p-1 px-3 rounded-md"
                          >
                            <option>উপজেলা</option>
                            <option>উপজেলা</option>
                            <option>উপজেলা</option>
                          </select>
                        </div>
                      )}
                    </>
                  );
                })}
              </div>
            </div>
            <div className="hidden md:block">
              <AdvertisementSideSm className="!hidden md:block" />

              <div className="p-[26px] border flex flex-col gap-3 rounded-md">
                <div className="flex items-center gap-3 mb-[26px]">
                  <PiMapPin className="text-xl text-secondary" />
                  <h3>আমার এলাকার খবর</h3>
                </div>

                <select
                  name=""
                  id=""
                  className="w-full border p-1 px-3 rounded-md"
                >
                  <option>বিভাগ</option>
                  <option>বিভাগ</option>
                  <option>বিভাগ</option>
                </select>
                <select
                  name=""
                  id=""
                  className="w-full border p-1 px-3 rounded-md"
                >
                  <option>জেলা</option>
                  <option>জেলা</option>
                  <option>জেলা</option>
                </select>
                <select
                  name=""
                  id=""
                  className="w-full border p-1 px-3 rounded-md"
                >
                  <option>উপজেলা</option>
                  <option>উপজেলা</option>
                  <option>উপজেলা</option>
                </select>
              </div>

              <AdvertisementSideSm className="mt-6" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <AdvertisementPageTop className="mb-5 !hidden md:block" />
          <div className="grid grid-cols-1 md:grid-cols-[1fr_250px] lg:grid-cols-[1fr_297px] xl:grid-cols-[160px_1fr_297px] gap-[30px] max-w-[1252px] mx-auto">
            <div className="hidden xl:block">
              <AdvertisementLeftSide />
            </div>
            <div>
              {newsData?.map((item: any, i: any) => {
                return (
                  <div key={i}>
                    <NewsCard
                      key={i}
                      data={item}
                      classes={{
                        root: "grid-cols-[118px_1fr] md:grid-cols-[186px_1fr] lg:grid-cols-[306px_1fr] lg:col-span-4 gap-3 lg:gap-[20px]",
                        ImageWrapper: "!h-[70px] md:!h-[110px] lg:!h-[162px]",
                        ImageStyle: "!h-full",
                        title:
                          "text-sm leading-[18px] md:text-sm lg:text-xl !mb-1 ",
                        desc: "text-base md:text-xs lg:text-base !mb-[2px] hidden md:inline-flex md:!line-clamp-2",
                        date: "!text-xs md:text-sm",
                        social: "hidden lg:block",
                        body: "!gap-0",
                      }}
                    />
                    <div className="w-full h-[1px] bg-[#DBDADE] my-[15px]"></div>
                  </div>
                );
              })}
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

export default CategoryListing;
