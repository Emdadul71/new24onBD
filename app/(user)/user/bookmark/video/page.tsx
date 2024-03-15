import { normalizedText } from "@/helpers/utils";
import NewsCard from "@/modules/@common/@layout/news-card";
import AdvertisementLeftSide from "@/modules/@common/advertisement/left_side";
import AdvertisementPageTop from "@/modules/@common/advertisement/page_top";
import AdvertisementSideSm from "@/modules/@common/advertisement/side_sm";
import { Footer } from "@/modules/@common/footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const newsData = [
  {
    imgSrc: "/temp/video-card-1.jpg",
    title:
      "মেঘনা ও তেঁতুলিয়া নদীতে মাছ ধরা ঠেকাতে অভিযান | Fishing Restrictions...",
    desc: "#DeshTV #DeshTelevision #DeshTVNews Welcome to the Official YouTube Channel of DeshTV »» One-Click Subscription....",
    date: "৫ জুলাই, ২০২২",
  },
  {
    imgSrc: "/temp/video-card-1.jpg",
    title:
      "মেঘনা ও তেঁতুলিয়া নদীতে মাছ ধরা ঠেকাতে অভিযান | Fishing Restrictions...",
    desc: "#DeshTV #DeshTelevision #DeshTVNews Welcome to the Official YouTube Channel of DeshTV »» One-Click Subscription....",
    date: "৫ জুলাই, ২০২২",
  },
  {
    imgSrc: "/temp/video-card-1.jpg",
    title:
      "মেঘনা ও তেঁতুলিয়া নদীতে মাছ ধরা ঠেকাতে অভিযান | Fishing Restrictions...",
    desc: "#DeshTV #DeshTelevision #DeshTVNews Welcome to the Official YouTube Channel of DeshTV »» One-Click Subscription....",
    date: "৫ জুলাই, ২০২২",
  },
  {
    imgSrc: "/temp/video-card-1.jpg",
    title:
      "মেঘনা ও তেঁতুলিয়া নদীতে মাছ ধরা ঠেকাতে অভিযান | Fishing Restrictions...",
    desc: "#DeshTV #DeshTelevision #DeshTVNews Welcome to the Official YouTube Channel of DeshTV »» One-Click Subscription....",
    date: "৫ জুলাই, ২০২২",
  },
  {
    imgSrc: "/temp/video-card-1.jpg",
    title:
      "মেঘনা ও তেঁতুলিয়া নদীতে মাছ ধরা ঠেকাতে অভিযান | Fishing Restrictions...",
    desc: "#DeshTV #DeshTelevision #DeshTVNews Welcome to the Official YouTube Channel of DeshTV »» One-Click Subscription....",
    date: "৫ জুলাই, ২০২২",
  },
  {
    imgSrc: "/temp/video-card-1.jpg",
    title:
      "মেঘনা ও তেঁতুলিয়া নদীতে মাছ ধরা ঠেকাতে অভিযান | Fishing Restrictions...",
    desc: "#DeshTV #DeshTelevision #DeshTVNews Welcome to the Official YouTube Channel of DeshTV »» One-Click Subscription....",
    date: "৫ জুলাই, ২০২২",
  },
  {
    imgSrc: "/temp/video-card-1.jpg",
    title:
      "মেঘনা ও তেঁতুলিয়া নদীতে মাছ ধরা ঠেকাতে অভিযান | Fishing Restrictions...",
    desc: "#DeshTV #DeshTelevision #DeshTVNews Welcome to the Official YouTube Channel of DeshTV »» One-Click Subscription....",
    date: "৫ জুলাই, ২০২২",
  },
  {
    imgSrc: "/temp/video-card-1.jpg",
    title:
      "মেঘনা ও তেঁতুলিয়া নদীতে মাছ ধরা ঠেকাতে অভিযান | Fishing Restrictions...",
    desc: "#DeshTV #DeshTelevision #DeshTVNews Welcome to the Official YouTube Channel of DeshTV »» One-Click Subscription....",
    date: "৫ জুলাই, ২০২২",
  },
  {
    imgSrc: "/temp/video-card-1.jpg",
    title:
      "মেঘনা ও তেঁতুলিয়া নদীতে মাছ ধরা ঠেকাতে অভিযান | Fishing Restrictions...",
    desc: "#DeshTV #DeshTelevision #DeshTVNews Welcome to the Official YouTube Channel of DeshTV »» One-Click Subscription....",
    date: "৫ জুলাই, ২০২২",
  },
];
const BookmarkVideo = () => {
  return (
    <section>
      <div className="container">
        <AdvertisementPageTop className="mt-5" />

        <div className="mb-7">
          <h3 className="font-semibold mb-[6px] text-[#4B4B4B]">
            Video Bookmarks
          </h3>
          <p className="text-[15px]">Manage Your Video Bookmarks</p>
        </div>
        <div className="grid grid-cols-1  lg:grid-cols-[1fr_297px] gap-[30px] mx-auto self-start">
          <div>
            {newsData?.map((item: any, i: any) => {
              return (
                <div key={i}>
                  <NewsCard
                    key={i}
                    data={item}
                    classes={{
                      root: "grid-cols-[118px_1fr] lg:grid-cols-[306px_1fr] lg:col-span-4 gap-3 lg:gap-[20px] ",
                      ImageWrapper: "!h-[70px] lg:!h-[162px]",
                      ImageStyle: "!h-full",
                      title:
                        "text-sm leading-[18px] md:heading-five !mb-1 lg:leading-[30px] !line-clamp-1",
                      desc: "text-base !mb-[2px] hidden md:inline-flex md:!line-clamp-2",
                      date: "hidden",
                      social: "hidden lg:block ",
                      category: "hidden",
                      cat: "!justify-end",
                      body: "!gap-0",
                    }}
                  />
                  <div className="w-full h-[1px] bg-[#DBDADE] my-[15px]"></div>
                </div>
              );
            })}
          </div>

          <div className="sticky !top-[100px] self-start">
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
              {newsData?.slice(0, 5)?.map((item: any, i: any) => {
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
            <Footer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookmarkVideo;
