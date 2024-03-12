"use client";
import navData from "@/helpers/data/nav.json";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { FiChevronDown, FiChevronUp, FiHeart } from "react-icons/fi";
import styles from "./header.module.scss";
import { usePathname } from "next/navigation";
import Search from "../@component/@components/search";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [userToken, setUserToken] = useState<any>();
  // const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const path = usePathname();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // const onChange = (e: RadioChangeEvent) => {
  //   setPlacement(e.target.value);
  // };

  const [selected, setSelected] = useState(null);

  const toggle = (i: any) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <>
      <header className="sticky top-0 bg-white  z-[100]  shadow-sm ">
        <div className="container">
          <div className="grid lg:grid-cols-[auto_1fr_auto] gap-5 md:gap-[50px] items-center py-4 lg:py-0">
            <div className="flex justify-center">
              <Link href="/" className="block w-max">
                <Image
                  src="/misc/logo-light.png"
                  width={140}
                  height={30}
                  alt="24onBD"
                  priority
                />
              </Link>
            </div>
            {navData && navData?.length > 0 && (
              <nav className="hidden lg:block font-medium">
                <ul className="flex justify-center items-center">
                  {navData?.map((item: any, index: any) => {
                    let p: any;
                    if (
                      (path.includes(item.link) &&
                        item.link != "/#" &&
                        item.link !== "/") ||
                      (item.link == "/" && path == "/")
                    ) {
                      p = true;
                    }

                    // Custom logic for Advisor start
                    if (
                      path.includes("R") &&
                      item.title === "Legal Advisors" &&
                      item.link != "/#"
                    ) {
                      p = true;
                    }
                    //Custom Logic End
                    item?.children?.map((itm: any) => {
                      if (itm.link == path && itm.link != "/#") {
                        p = true;
                      }
                      itm?.grandChld?.map((abc: any) => {
                        if (abc.link == path && abc?.link != "/#") {
                          p = true;
                        }
                      });
                    });

                    if (item?.isHidden) {
                      return null;
                    } else
                      return (
                        <li
                          key={index}
                          // className={`relative text-black border-b-[3px] border-transparent hover:border-b-[3px] hover:border-secondary transition-all ${
                          className={`relative text-black ${
                            styles.has_submenu
                          } ${p ? "border-secondary text-primary" : ""}`}
                        >
                          {item?.link ? (
                            <Link
                              title={item?.title}
                              href={item.link}
                              className="flex items-center gap-2  cursor-pointer  hover:text-inherit group"
                            >
                              <div>
                                <span className="2lg:text-[15px] xl:text-base inline-block px-4 pt-[18px] pb-4">
                                  {item?.title}
                                </span>
                                <div className="w-[0px] group-hover:w-full h-[2px] bg-red-500 transition-all duration-[350ms]"></div>
                              </div>
                              {item?.children && <FiChevronDown />}
                            </Link>
                          ) : (
                            <div className="flex items-center gap-2 cursor-pointer px-2 py-6 hover:text-inherit">
                              <span className="2lg:text-[15px] xl:text-base">
                                {item?.title}
                              </span>
                              {item?.children && <FiChevronDown />}
                            </div>
                          )}

                          {item?.children && item?.children?.length > 0 && (
                            <div
                              className={`absolute bg-white p-4 rounded-lg shadow-xl  ${
                                styles.submenu
                              } ${
                                item?.isColTwo
                                  ? "grid grid-cols-2 gap-x-[60px]"
                                  : ""
                              }`}
                            >
                              {item?.children?.map((cldn: any, i: number) => {
                                return (
                                  <div key={i} className="relative">
                                    <div
                                      className={`overflow-hidden group ${
                                        p
                                          ? "border-secondary text-secondary"
                                          : ""
                                      }`}
                                    >
                                      <Link
                                        title={cldn?.title}
                                        href={cldn?.link}
                                        className="flex p-2 hover:text-inherit text-black font-normal items-center gap-2 translate-x-[-30px] hover:translate-x-0 transition"
                                      >
                                        <span className="w-5 h-[2px] bg-black"></span>
                                        <span>{cldn?.title}</span>
                                      </Link>

                                      {cldn?.grandChld && (
                                        <div className="min-w-[200px] left-[108%] top-0 absolute bg-white p-4 rounded-r-lg shadow-sm	 invisible group-hover:visible transition-all">
                                          {cldn?.grandChld?.map(
                                            (index: any, i: any) => {
                                              return (
                                                <div
                                                  key={i}
                                                  className="relative "
                                                >
                                                  <div className="overflow-hidden ">
                                                    <Link
                                                      title={index?.title}
                                                      href={index?.link}
                                                      className="whitespace-nowrap flex p-2 hover:text-inherit text-black font-normal items-center gap-2 translate-x-[-30px] hover:translate-x-0 transition "
                                                    >
                                                      <span className="w-5 h-[2px] bg-black"></span>
                                                      {index?.title}
                                                    </Link>
                                                  </div>
                                                </div>
                                              );
                                            }
                                          )}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </li>
                      );
                  })}
                </ul>
              </nav>
            )}

            <div className="flex  gap-5 w-full">
              <Search />
              <button className="btn btn-secondary">লগ ইন</button>
            </div>
          </div>
        </div>
      </header>

      {/* <Drawer
        title="Immi Link"
        placement={placement}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <div className="h-[100vh] overflow-auto">
          <div
            className="flex flex-col overflow-auto"
            style={{ height: "calc(100vh - 60px" }}
          >
            <div>
              <>
                {navData && navData?.length > 0 ? (
                  <div className="flex flex-col">
                    {navData?.map((item: any, i: any) => {
                      return (
                        <Fragment key={i}>
                          <div key={i} className="relative">
                            {item?.children && item?.children?.length > 0 ? (
                              <>
                                {item?.isHidden ? null : (
                                  <div
                                    onClick={() => toggle(i)}
                                    className="flex items-center justify-between w-full py-2 z-10 gap-1"
                                  >
                                    <span className="text-left">
                                      {item.title}
                                    </span>
                                    {item?.children && (
                                      <>
                                        {selected == i ? (
                                          <FiChevronUp className="shrink-0" />
                                        ) : (
                                          <FiChevronDown className="shrink-0" />
                                        )}
                                      </>
                                    )}
                                  </div>
                                )}
                              </>
                            ) : (
                              <>
                                <Link
                                  title={item.title}
                                  href={item?.link || "#"}
                                  onClick={() => setOpen(false)}
                                  className="flex items-center justify-between w-full py-2 z-10 gap-1"
                                >
                                  <span className="text-left">
                                    {item.title}
                                  </span>
                                </Link>
                              </>
                            )}

                            <div>
                              {selected == i && (
                                <ul>
                                  {item.children?.map((cldn: any, i: any) => {
                                    return (
                                      <li
                                        title={cldn?.title}
                                        key={i}
                                        onClick={() => setOpen(false)}
                                      >
                                        <Link
                                          href={cldn?.link || "#"}
                                          className="flex p-2"
                                        >
                                          {cldn?.title}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              )}
                            </div>
                          </div>
                        </Fragment>
                      );
                    })}
                  </div>
                ) : null}
              </>
            </div>
          </div>
        </div>
      </Drawer> */}
    </>
  );
};

export default Header;
