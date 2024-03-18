// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { BiCamera } from "react-icons/bi";
// import { FaRegEdit } from "react-icons/fa";
// import { FiUser } from "react-icons/fi";
// import { IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";

// const EditUpdate = () => {
//   return (
//     <section>
//       <div className="container">
//         <div className="grid grid-cols-[300px_1fr] gap-[30px] pt-[50px]">
//           <div className="flex flex-col justify-center items-center gap-[30px] border px-5 py-[30px] rounded-md self-start">
//             <div className="flex flex-col items-center gap-[10px] ">
//               <div className="w-[128px] h-[128px] rounded-full relative">
//                 <Image
//                   src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                   width={128}
//                   height={128}
//                   alt=""
//                   className="w-full h-full object-cover rounded-full"
//                 />
//                 <div className="w-[30px] h-[30px] bg-[#D32027] rounded-full flex justify-center items-center absolute right-0 bottom-[10px] border border-[2px] boreder-white">
//                   <BiCamera className="text-white " />
//                 </div>
//               </div>
//               <div className="flex flex-col items-center gap-1">
//                 <h6 className="text-black mb-2">Savannah Nguyen</h6>
//                 <p className="text-[#A5A2AD] text-xs mb-0">User ID: 02154654</p>
//               </div>
//             </div>
//             <div className="w-full border-t">
//               <div className="flex flex-col gap-4">
//                 <Link href="#" className="pt-4 flex items-center gap-2">
//                   <FiUser className="mb-1 text-secondary" />
//                   <p className="mb-0 text-[15px] text-secondary">
//                     Personal Info
//                   </p>
//                 </Link>
//                 <Link href="#" className=" flex items-center gap-2">
//                   <IoSettingsOutline className="mb-1 " />
//                   <p className="mb-0 text-[15px] ">Settings</p>
//                 </Link>
//                 <div className="w-full h-[1px] bg-[#DBDADE]"></div>
//                 <Link href="#" className=" flex items-center gap-2">
//                   <IoLogOutOutline className="mb-1 text-lg" />
//                   <p className="mb-0 text-[15px] ">Log Out</p>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="p-[30px] border rounded-md flex flex-col gap-[30px] self-start">
//             <div className="flex justify-between items-start w-full">
//               <div>
//                 <h3>Settings</h3>
//                 <p className="mb-0 text-[15px]">
//                   Manage your email address, mobile number and password
//                 </p>
//               </div>
//               <Link href="" className="btn btn-white text-[#00006D] group">
//                 <FaRegEdit className="mb-1 text-[#A5A2AD] group-hover:text-secondary transition-all" />
//                 Edit
//               </Link>
//             </div>
//             <div className="grid grid-cols-[120px_1fr] gap-6">
//               <p className="mb-0 text-[15px]">Email</p>
//               <p className="mb-0 text-[15px]">michael.mitc@example.com</p>
//               <div className="w-full h-[1px] bg-[#DBDADE] col-span-2"></div>
//               <p className="mb-0 text-[15px]">Phone</p>
//               <p className="mb-0 text-[15px]">(405) 555-0128</p>
//               <div className="w-full h-[1px] bg-[#DBDADE] col-span-2"></div>
//               <p className="mb-0 text-[15px]">Password</p>
//               <p className="mb-0 text-[15px]">
//                 <Link href="" className="font-semibold text-[#00006D]">
//                   Change Password?
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EditUpdate;

"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@radix-ui/react-checkbox";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiCamera } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
import { FiEdit, FiUser } from "react-icons/fi";
import { IoIosCalendar } from "react-icons/io";
import { IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";

const PersonalInfoEdit = () => {
  return (
    <section>
      <div className="container">
        <div className="grid lg:grid-cols-[300px_1fr] gap-[30px] pt-[50px]">
          <div className="flex flex-col justify-center items-center gap-[30px] border px-5 py-[30px] rounded-md self-start">
            <div className="flex flex-col items-center gap-[10px] ">
              <div className="w-[128px] h-[128px] rounded-full relative">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={128}
                  height={128}
                  alt=""
                  className="w-full h-full object-cover rounded-full"
                />
                <div className="w-[30px] h-[30px] bg-[#D32027] rounded-full flex justify-center items-center absolute right-0 bottom-[10px] border border-[2px] boreder-white">
                  <BiCamera className="text-white " />
                </div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <h6 className="text-black mb-2">Savannah Nguyen</h6>
                <p className="text-[#A5A2AD] text-xs mb-0">User ID: 02154654</p>
              </div>
            </div>
            <div className="w-full border-t">
              <div className="flex flex-col gap-4">
                <Link href="#" className="pt-4 flex items-center gap-2">
                  <FiUser className="mb-1 text-secondary" />
                  <p className="mb-0 text-[15px] text-secondary">
                    Personal Info
                  </p>
                </Link>
                <Link href="#" className=" flex items-center gap-2">
                  <IoSettingsOutline className="mb-1 " />
                  <p className="mb-0 text-[15px] ">Settings</p>
                </Link>
                <div className="w-full h-[1px] bg-[#DBDADE]"></div>
                <Link href="#" className=" flex items-center gap-2">
                  <IoLogOutOutline className="mb-1 text-lg" />
                  <p className="mb-0 text-[15px] ">Log Out</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="p-5 lg:p-[30px] border rounded-md flex flex-col gap-[30px]">
            <div className="flex justify-between items-start w-full">
              <div>
                <h3>Settings</h3>
                <p className="mb-0 text-[15px]">
                  Manage your email address, mobile number and password
                </p>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="flex flex-col gap-[10px]">
                <label
                  htmlFor=""
                  className="text-xs text-[#353535] font-semibold"
                >
                  Email Address
                </label>
                <input
                  type="text"
                  placeholder="example@gmail.com"
                  className="px-4 py-3 border border-[#DBDADE] focus:outline-none rounded-md"
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <label
                  htmlFor=""
                  className="text-xs text-[#353535] font-semibold"
                >
                  Date of Birth
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Select Date"
                    className="pl-4 pr-12 py-3 border border-[#DBDADE] focus:outline-none rounded-md w-full"
                  />
                  <IoIosCalendar className="absolute right-[20px] top-[50%] translate-y-[-50%] text-xl" />
                </div>
              </div>
              <div className="flex flex-col gap-[10px]">
                <label
                  htmlFor=""
                  className="text-xs text-[#353535] font-semibold"
                >
                  Password
                </label>
                <input
                  type="text"
                  placeholder="Type Password"
                  className="px-4 py-3 border border-[#DBDADE] focus:outline-none rounded-md"
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <label
                  htmlFor=""
                  className="text-xs text-[#353535] font-semibold"
                >
                  Confirm Password
                </label>
                <input
                  type="text"
                  placeholder="Confirm Password"
                  className="px-4 py-3 border border-[#DBDADE] focus:outline-none rounded-md"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <div className="flex gap-3">
                <button className="btn btn-white-outline">Close</button>
                <button className="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfoEdit;
