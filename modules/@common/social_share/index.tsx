"use client";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { PiInstagramLogoBold } from "react-icons/pi";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

interface propsTypes {
  className?: any;
  sharedUrl: string;
}

const SocialShare = ({ className, sharedUrl }: propsTypes) => {
  return (
    <ul
      className={`flex items-center justify-center gap-1 ${
        className?.root ? className?.root : ""
      } `}
    >
      <li>
        <FacebookShareButton url={sharedUrl}>
          <span className="block px-1 text-[#726F84] hover:text-secondary">
            <BiLogoFacebook className="text-xl" />
          </span>
        </FacebookShareButton>
      </li>
      <li>
        <TwitterShareButton url={sharedUrl}>
          <span className="block px-1 text-[#726F84] hover:text-secondary">
            <AiOutlineTwitter className="text-xl" />
          </span>
        </TwitterShareButton>
      </li>
      <li>
        <LinkedinShareButton url={sharedUrl}>
          <span className="block px-1 text-[#726F84] hover:text-secondary">
            <FaLinkedinIn className="text-lg" />
          </span>
        </LinkedinShareButton>
      </li>
      <li>
        <WhatsappShareButton url={sharedUrl}>
          <span className="block px-1 text-[#726F84] hover:text-secondary">
            <PiInstagramLogoBold className="text-lg" />
          </span>
        </WhatsappShareButton>
      </li>
    </ul>
  );
};

export default SocialShare;
