import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const CustomPopover = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <div className="flex items-center gap-2">
          <div className="w-[38px] h-[38px] rounded-full">
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={38}
              height={38}
              alt=""
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <MdOutlineKeyboardArrowDown className="text-2xl" />
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div className="border-t border-t-[4px] border-t-secondary ">
          <div className="border-t border-t-[4px] border-t-secondary  p-4 border-b">
            <p className="mb-0 text-sm">Dashboard</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <p className="mb-0 text-sm ">Bookmark</p>
              </AccordionTrigger>
              <AccordionContent>
                <Link href="#" className="px-4 pb-4 flex">
                  <p className="mb-0 text-sm">News</p>
                </Link>
                <Link href="#" className="px-4 pb-4 flex">
                  <p className="mb-0 text-sm">Videos</p>
                </Link>
                <Link href="#" className="px-4 flex">
                  <p className="mb-0 text-sm">Jobs</p>
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* <div className="  p-4 border-b">
            <p className="mb-0 text-sm">Bookmark</p>
          </div> */}
          <div className=" p-4 border-b">
            <p className="mb-0 text-sm">Add Post</p>
          </div>
          <div className="  p-4 border-b">
            <p className="mb-0 text-sm">Dashboard</p>
          </div>
          <div className="  p-4 border-b">
            <p className="mb-0 text-sm">Topic</p>
          </div>
          <div className="  p-4 border-b">
            <p className="mb-0 text-sm">Profile</p>
          </div>
          <div className="  p-4 border-b">
            <p className="mb-0 text-sm">Log Out</p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CustomPopover;
