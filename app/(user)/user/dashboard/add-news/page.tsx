import AdvertisementPageTop from "@/modules/@common/advertisement/page_top";
import React from "react";

const AddNews = () => {
  return (
    <section>
      <div className="container">
        <AdvertisementPageTop className="mt-5" />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-[30px]">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-[10px]">
              <label
                htmlFor=""
                className="text-sm text-[#353535] font-semibold"
              >
                Title
              </label>
              <input
                type="text"
                placeholder="Add title"
                className="px-4 py-2 border border-[#DBDADE] focus:outline-none rounded-md"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <label
                htmlFor=""
                className="text-sm text-[#353535] font-semibold"
              >
                Sub Heading
              </label>
              <input
                type="text"
                placeholder="Sub Heading"
                className="px-4 py-2 border border-[#DBDADE] focus:outline-none rounded-md"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <label
                htmlFor=""
                className="text-sm text-[#353535] font-semibold"
              >
                Meta Title
              </label>
              <input
                type="text"
                placeholder="Add meta title"
                className="px-4 py-2 border border-[#DBDADE] focus:outline-none rounded-md"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <label
                htmlFor=""
                className="text-sm text-[#353535] font-semibold"
              >
                Meta Description
              </label>
              <textarea
                placeholder="Type here"
                className="px-4 py-2 border border-[#DBDADE] focus:outline-none rounded-md"
              />
            </div>
          </div>
          <div>rwr</div>
        </div>
      </div>
    </section>
  );
};

export default AddNews;
