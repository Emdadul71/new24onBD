import { useState } from "react";
import { FiSearch } from "react-icons/fi";

interface propTypes {
  pageType?: string; // news, video, job
}

export const Search = ({ pageType = "news" }: propTypes) => {
  const [text, setText] = useState("");
  const [lan, setLan] = useState("english"); // bangla, english

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (pageType == "video") {
      window.location.replace(`/videos/search/${text.trim()}`);
    } else if (pageType == "job") {
      window.location.replace(`/jobs/search/${text.trim()}`);
    } else {
      window.location.replace(`/search/${text.trim()}`);
    }
  };

  const placeholderFn = () => {
    if (pageType == "video") {
      return lan == "bangla" ? "ভিডিও খুঁজুন" : "Search Videos";
    } else if (pageType == "job") {
      return lan == "bangla" ? "চাকরি খুঁজুন" : "Search Jobs";
    } else {
      return lan == "bangla" ? "নিউজ খুঁজুন" : "Search News";
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="grid grid-cols-[1fr_auto]">
        <div className="relative">
          <input
            id="search"
            type="text"
            className="!mt-0 text-[15px] !px-4 py-[6px] w-full rounded-md  bg-[#F4F4F4] focus:outline-0"
            placeholder="নিউজ খুজুন"
            onKeyUp={(e: any) => setText(e.target.value)}
            value={text}
          />
        </div>
        <button
          type="submit"
          className={`btn btn-primary px-[30px] ml-[-4px] z-10 rounded-s-none ${
            !text ? " bg-primary" : ""
          }`}
        >
          <FiSearch />
        </button>
      </form>
    </>
  );
};

export default Search;
