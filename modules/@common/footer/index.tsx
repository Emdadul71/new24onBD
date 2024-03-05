import Link from "next/link";
import SocialLinks from "../../../modules/@common/social_share";
import AppLink from "../app_link";
const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URI;

export function Footer() {
  return (
    <>
      <AppLink />
      <div className="text-center pb-4">
        <SocialLinks sharedUrl="#" />
        <div className="">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Link
              href={`${baseUrl}/about-us`}
              className="hover:text-secondary transition-all"
            >
              About Us
            </Link>
            <div className="w-2 h-2 rounded-full bg-gray-500"></div>
            <Link
              href={`${baseUrl}/contact-us`}
              className="hover:text-secondary transition-all"
            >
              Contact Us
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2 mb-2">
            <Link
              href={`${baseUrl}/terms-of-use`}
              className="hover:text-secondary transition-all"
            >
              Terms of Use
            </Link>
            <div className="w-2 h-2 rounded-full bg-gray-500"></div>
            <Link
              href={`${baseUrl}/privacy-policy`}
              className="hover:text-secondary transition-all"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        <div>স্বত্ব © 24ONBD {new Date().getFullYear()}</div>
      </div>
    </>
  );
}
