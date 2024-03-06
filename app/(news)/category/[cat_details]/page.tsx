import CategoryListing from "@/modules/news/category";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Bangladesh Largest Bangla News Aggregated AI",
  description:
    "It's a Canadian immigration marketplace where the right clients meet the perfect advisors.",

  keywords:
    "bd news, bd news 24, all bangla news, bangla news, bd news paper, bangla news 24, news, bangladesh news, bangla news paper, all bangla news paper, bd news bangla, bangladeshi news paper, news today",
};
const CategoryListingPage = () => {
  return (
    <>
      <CategoryListing />
    </>
  );
};

export default CategoryListingPage;
