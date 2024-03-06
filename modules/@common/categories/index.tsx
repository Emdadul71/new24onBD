"use client";
import { normalizedText } from "@/helpers/utils";
import Image from "next/image";
import Link from "next/link";
const catData = [
  { title: "সর্বশেষ", slug: "/সর্বশেষ" },
  { title: "বিশেষ সংবাদ", slug: "/বিশেষ সংবাদ" },
  { title: "রাজনীতি", slug: "/রাজনীতি" },
  { title: "রাজনীতি", slug: "/রাজনীতি" },
  { title: "সর্বশেষ", slug: "/সর্বশেষ" },
  { title: "বিশেষ সংবাদ", slug: "/বিশেষ সংবাদ" },
  { title: "রাজনীতি", slug: "/রাজনীতি" },
  { title: "রাজনীতি", slug: "/রাজনীতি" },
];
const CategoryList = ({ cat, setCat, title }: any) => {
  return (
    <>
      {catData?.length > 0 ? (
        <div className="tags mb-10">
          <div className="flex items-center gap-1 mb-3">
            <Image
              src="/images/icon-fire.png"
              alt="trending"
              width={16}
              height={16}
            />
            <h4 className="font-bold">{normalizedText(title)}</h4>
          </div>
          <div className="mb-8 category_list">
            <ul className="flex flex-wrap items-center gap-2">
              <li
                className={`text-xs inline-block px-5 py-1 font-heading leading-5 rounded-full border border-[#EB5842] text-[#EB5842] hover:bg-[#FDEEEC] transition-all cursor-pointer ${
                  cat === ""
                    ? "bg-secondary text-white hover:text-secondary"
                    : ""
                }`}
              >
                All
              </li>
              {catData?.map((item: any, i: any) => {
                return (
                  <li
                    key={i}
                    className={`text-xs inline-block px-3 py-1 font-heading leading-5 rounded-full border border-[#EB5842] text-[#EB5842] hover:bg-[#FDEEEC] transition-all cursor-pointer ${
                      item?.slug == cat
                        ? "bg-secondary text-white hover:text-secondary"
                        : ""
                    }`}
                  >
                    <Link href={`${`/category/${normalizedText("সর্বশেষ")}`}`}>
                      {normalizedText(item.title)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CategoryList;
