import { normalizedText } from "@/helpers/utils";
import NewsCard from "@/modules/@common/@layout/news-card";
import Advertisement from "@/modules/@common/advertisement";
import AdvertisementPageTop from "@/modules/@common/advertisement/page_top";
import AdvertisementSideSm from "@/modules/@common/advertisement/side_sm";
import CategoryList from "@/modules/@common/categories";
import { Footer } from "@/modules/@common/footer";
import Skeleton from "@/modules/@common/skeleton";
import SocialShare from "@/modules/@common/social_share";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { TbMapPinFilled } from "react-icons/tb";

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
    title: "রাসুল (সা.)–এর মমতা এক সাহাবির প্রতি",
    desc: "ইসহাক ইবনু আমর ইবনু সালীত (রহ.) আবু বারযাহ (রা.)–এর বরাতে বর্ণনা করা হয়েছে যে, নবী (সা.) এক জিহাদে ছিলেন। আল্লাহ তাঁকে গনিমতের সম্পদ দিলেন। তিনি তাঁর সাহাবাদের বললেন, তোমরা কি কাউকে হারিয়েছ?",
    date: "৫ জুলাই, ২০২২",
  },
  {
    imgSrc: "/temp/news-card-4.webp",
    title: "চট্টগ্রামে হোটেল থেকে বিদেশি নাগরিকের লাশ উদ্ধার",
    desc: "চট্টগ্রাম নগরের জিইসি এলাকার অভিজাত একটি হোটেল থেকে আজ সোমবার দুপুরে এক বিদেশি নাগরিকের লাশ উদ্ধার করা হয়েছে। তাঁর নাম জদজিসলো মিসেল সিজারিবা (৫৮)। তিনি পোল্যান্ডের নাগরিক।",
    date: "৫ জুলাই, ২০২২",
  },
  {
    imgSrc: "/temp/news-card-5.webp",
    title: "রাজধানীর মগবাজারে ১০ কেজি গাঁজাসহ নারী গ্রেপ্তার",
    desc: "রাজধানীর মগবাজার এলাকায় গতকাল শনিবার অভিযান চালিয়ে গাঁজাসহ এক নারীকে গ্রেপ্তার করেছে ঢাকা মহানগর পুলিশের (ডিএমপি) গোয়েন্দা বিভাগ (ডিবি)। গ্রেপ্তার হওয়া নারীর নাম শারমিন আক্তার সুমি ওরফে সুখী। পুলিশ বলেছে, শারমিন একজন মাদক কারবারি। তাঁর কাছ থেকে ১০ কেজি গাঁজা ও মাদক বিক্রিতে ব্যবহৃত একটি মুঠোফোন জব্দ করা হয়েছে।",
    date: "৫ জুলাই, ২০২২",
  },
  {
    imgSrc: "/temp/firm-incedents.webp",

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
    imgSrc: "/temp/news-card-7.webp",

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
const HomeHero = () => {
  return (
    <>
      <section className="pt-4">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_297px] gap-[30px]">
            <div>
              <AdvertisementPageTop className="mt-5" />
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 ">
                {newsData?.map((item: any, i: any) => {
                  const isFirst = i == 0;
                  const isFifth = i == 4;
                  const isTwoToFive = i == 1 || i == 2 || i == 3 || i == 4;
                  return (
                    <>
                      <NewsCard
                        key={i}
                        data={item}
                        classes={{
                          root: isFirst
                            ? "lg:grid-cols-2 col-span-4"
                            : isTwoToFive
                            ? "lg:grid-cols-1 col-span-4 lg:col-span-1"
                            : `lg:grid-cols-[306px_1fr] col-span-4 gap-[20px] `,
                          title: isFirst
                            ? "!heading-three lg:!text-white !hover:text-primary"
                            : isTwoToFive
                            ? "!heading-six"
                            : "!heading-five",
                          ImageWrapper: isFirst
                            ? "lg:!h-[334px] !rounded-l-none"
                            : isTwoToFive
                            ? "!h-[124px] mb-3"
                            : "",
                          ImageStyle: isFirst ? "!rounded-l-none" : "",
                          body: isFirst
                            ? "lg:!-order-1 !justify-start lg:bg-[#1E184E] lg:p-[30px] gap-[14px] !rounded-l-md"
                            : "",
                          desc: isFirst
                            ? "!line-clamp-4 lg:!text-white"
                            : isTwoToFive
                            ? "!hidden"
                            : "",
                          date: isFirst ? "!lg:text-white" : "",
                          social: isFirst ? "!hidden" : "",
                          cat: isTwoToFive ? "!hidden" : "",
                        }}
                      />
                      {isFifth && (
                        <div className="col-span-4">
                          <CategoryList title="টপ ক্যাটাগরি" />
                        </div>
                      )}

                      {i > 4 && (
                        <div className="w-full h-[1px] bg-[#DBDADE] col-span-4"></div>
                      )}

                      {i == 8 && (
                        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-5 col-span-4 border-b pb-5">
                          {newsData?.slice(0, 3)?.map((item: any, i: any) => {
                            const isFirst = i == 0;
                            return (
                              <>
                                <div>
                                  <Link
                                    href="/video/মেঘনা-ও-তেঁতুলিয়া-নদীতে"
                                    className="inline-block mb-1"
                                  >
                                    <Image
                                      src="/temp/video-card-1.jpg"
                                      alt="video News"
                                      width={960}
                                      height={540}
                                    />
                                  </Link>
                                  <Link href="/video/মেঘনা-ও-তেঁতুলিয়া-নদীতে">
                                    <h2 className="heading-six font-semibold text-base hover:text-secondary transition-all line-clamp-2 mb-2">
                                      মেঘনা ও তেঁতুলিয়া নদীতে মাছ ধরা ঠেকাতে
                                      অভিযান বিশেষ আকর্ষণ | Fishing Restrictions
                                    </h2>
                                  </Link>
                                  <div
                                    className={`flex items-center flex-wrap gap-2 `}
                                  >
                                    <Link
                                      href="/source"
                                      className="text-[13px] font-medium hover:text-secondary transition-all"
                                    >
                                      {normalizedText("Somoy TV")}
                                    </Link>
                                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                                    <span className="text-[13px] font-medium  transition-all">
                                      {normalizedText("৫ জুলাই, ২০২২")}
                                    </span>
                                  </div>
                                </div>
                              </>
                            );
                          })}
                        </div>
                      )}

                      {i == 11 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[30px] col-span-4 border-b pb-5">
                          {new Array(2).fill(1)?.map((_, i: any) => {
                            return (
                              <div key={i}>
                                <div
                                  className={`flex items-center justify-between items-center mb-1 `}
                                >
                                  <div
                                    className={`flex items-center flex-wrap gap-2 `}
                                  >
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
                                      <p className="mb-0 text-sm">
                                        Gulshan, Dhaka
                                      </p>
                                    </div>
                                    <div className="flex items-center gap-[10px]">
                                      <BsFillBriefcaseFill className="text-sm" />
                                      <p className="mb-0 text-sm">
                                        At least 3 years
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-2 mb-[10px]">
                                    <FaUserGraduate className="text-xs" />
                                    <p className="mb-0 text-sm">
                                      Bachelor of Business Administration (BBA)
                                      in Accounting
                                    </p>
                                  </div>
                                  <span className="px-3 py-1 bg-[#1E184E14] rounded-full text-sm">
                                    Deadline: 30 Mar 2024
                                  </span>
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </>
                  );
                })}
              </div>
            </div>
            <div>
              <CategoryList title="ট্রেন্ডিং" />
              <AdvertisementSideSm />

              <div className="flex items-center gap-1 mb-3">
                <Image
                  title="Popular"
                  src="/images/icon-fire.png"
                  alt="Popular"
                  width={16}
                  height={16}
                />
                <h4 className="font-bold">{normalizedText("জনপ্রিয়")}</h4>
              </div>
              <div className="flex flex-col gap-5 lg:gap-3">
                {newsData?.slice(5)?.map((item: any, i: any) => {
                  return (
                    <NewsCard
                      key={i}
                      data={item}
                      classes={{
                        root: "grid-cols-[105px_1fr] gap-[10px]",
                        ImageWrapper: "!h-[62px]",
                        title: "heading-custom-one",
                        body: "!gap-0",
                        desc: "!hidden",
                        cat: "!hidden",
                      }}
                    />
                  );
                })}
              </div>
              <AdvertisementSideSm className="mt-6" />
              <Footer />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHero;
