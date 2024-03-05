"use client";
import { excerpt } from "@/helpers/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMapPin, HiOutlinePrinter } from "react-icons/hi2";

const Footer = () => {
  return (
    <section className="mt-auto bg-[#1D1D1B] pb-0">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_1.8fr] gap-8 lg:gap-[120px] py-5 lg:py-[50px]">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/misc/immi-link-logo-white.png"
                width={156}
                height={28}
                alt="logo"
              />
            </Link>

            {/* <div className=" text-grey mb-8">
              <TextExpander text={footerText} />
            </div> */}
            <ul className="flex flex-col gap-5">
              {/* <li>
                <a
                  href="tel:+1 (639) 316-4943
                  "
                  className="inline-flex items-center gap-2 group"
                >
                  <FiPhoneCall className="text-white group-hover:text-hover transition-all text-xl" />
                  <span className="text-white group-hover:text-hover transition-all text-sm">
                    +1 (639) 316-4943
                  </span>
                </a>
              </li> */}
              <li>
                <a
                  href="mailto:support@immilink.ca"
                  className="inline-flex items-center gap-2 group"
                >
                  <FaRegEnvelope className="text-white group-hover:text-hover transition-all text-xl" />
                  <span className="text-white group-hover:text-hover transition-all text-sm">
                    support@immilink.ca
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <HiOutlineMapPin className="text-white text-xl" />
                  <span className="text-white text-sm">
                    3730 108 Ave NE (Unit: 2138), Calgary, AB. Canada. T3N 1V9
                  </span>
                </div>
              </li>
              {/* <li>
                <div className="flex items-center gap-2">
                  <HiOutlinePrinter className="text-white text-xl" />
                  <span className="text-white text-sm">+1-212-9876543</span>
                </div>
              </li> */}
            </ul>
          </div>

          <div className="mt-[28px]">
            {/* <div>
              <p className="font-bold text-white">About</p>
              <ul className="flex flex-col gap-4 text-white">
                <li>
                  <Link href="/about-us" className="text-sm">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    In Press
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Affiliate
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white">Service Providers</p>
              <ul className="flex flex-col gap-4 text-white">
                <li>
                  <Link href="/about-us" className="text-sm">
                    Find Immigration{" "}
                    <span className="block">Consultants (RCIC)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Find Insurance Agents
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Find Insurance Agents
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Find Lawyers & Legal Aids
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Find Financial Advisors
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white">FAQ</p>
              <ul className="flex flex-col gap-4 text-white">
                <li>
                  <Link href="/about-us" className="text-sm">
                    Account
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Manage Deliveries
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Orders
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Payments
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Copyright
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Language
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        <div className="grid lg:grid-cols-[1fr_1.8fr] gap-2 lg:gap-[120px] pb-5 lg:pb-12 items-center">
          <div className="order-1 lg:order-0">
            <p className="text-white text-sm text-center lg:text-start mb-0">
              © 2024, All Rights Reserved
            </p>
          </div>
          <ul className="flex gap-2 lg:gap-0 justify-center lg:justify-between flex-wrap lg:order-1">
            <li>
              <Link href="/about-us" className="text-white text-sm">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/advisors" className="text-white text-sm">
                Legal Advisors
              </Link>
            </li>
            <li>
              <Link href="/membership" className="text-white text-sm">
                Membership
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="text-white text-sm">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-and-condition" className="text-white text-sm">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="text-white text-sm">
                Disclaimer
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-white text-sm">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="text-white text-sm">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
