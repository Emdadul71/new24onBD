import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialShare from "../../social_share";
import { normalizedText } from "@/helpers/utils";
interface propTypes {
  classes?: {
    root?: string;
    body?: string;
    ImageWrapper?: string;
    ImageStyle?: string;
    title?: string;
    desc?: string;
    social?: string;
    cat?: string;
    date?: string;
    overlay?: string;
  };
  data?: any;
}
const NewsCard = ({ classes, data }: propTypes) => {
  return (
    <div
      className={`grid  group relative ${classes?.root ? classes.root : ""}`}
    >
      <div
        className={`absolute top-0 left-0 w-full h-full news_card_overlary hidden  ${
          classes?.overlay ? classes.overlay : ""
        }`}
      ></div>
      <Link
        href="#"
        className={`rounded-md h-[182px] ${
          classes?.ImageWrapper ? classes.ImageWrapper : ""
        }`}
      >
        <Image
          src={`${data?.imgSrc}` || "/misc/image_placeholder_big.webp"}
          width={306}
          height={182}
          alt="Test"
          className={`rounded-md h-full w-full objecct-cover ${
            classes?.ImageStyle ? classes.ImageStyle : ""
          }`}
          priority={true}
        />
      </Link>
      <div
        className={`flex flex-col gap-[10px] ${
          classes?.body ? classes.body : ""
        }`}
      >
        <div
          className={`flex items-center justify-between items-center ${
            classes?.cat ? classes.cat : ""
          }`}
        >
          <div className={`flex items-center flex-wrap gap-2 `}>
            <Link
              href=""
              className="text-xs font-medium text-secondary hover:text-secondary transition-all"
            >
              {normalizedText("বাংলাদেশ")}
            </Link>
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
            <Link
              href=""
              className="text-xs font-medium hover:text-secondary transition-all"
            >
              {normalizedText("বাংলাদেশ")}
            </Link>
          </div>

          <div className={`${classes?.social ? classes.social : ""}`}>
            <SocialShare sharedUrl="#" />
          </div>
        </div>

        <h1
          className={`  line-clamp-2  ${classes?.title ? classes.title : ""}`}
        >
          {" "}
          <Link href="#">{normalizedText(data?.title)}</Link>
        </h1>

        <p className={`mb-0 line-clamp-2 ${classes?.desc ? classes.desc : ""}`}>
          <Link href="#" className="hover:text-inherit">
            {normalizedText(data?.desc)}
          </Link>
        </p>

        <div
          className={`cursor-pointer text-[13px] ${
            classes?.date ? classes?.date : ""
          }`}
        >
          <span>{normalizedText("৫ জুলাই, ২০২২")}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
