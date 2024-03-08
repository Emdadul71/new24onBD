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
          <span
            onClick={() => {
              if (lan == "bangla") {
                setLan("English");
              } else {
                setLan("bangla");
              }
            }}
            className="absolute cursor-pointer right-[15px] top-[50%] -translate-y-[50%]  z-50"
          >
            {lan == "bangla" ? "English" : "বাংলা"}
          </span>

          {lan == "bangla" ? (
            <input
              id="search"
              type="text"
              className="!mt-0 text-[15px] !px-4 py-[6px] w-full rounded-md  bg-[#F4F4F4] focus:outline-0"
              placeholder={placeholderFn()}
              onKeyUp={(e: any) => setText(e.target.value)}
              value={text}
            />
          ) : (
            <input
              id="search"
              type="text"
              className="!mt-0 !px-4 py-[6px] w-full rounded-md  bg-[#F4F4F4] focus:outline-0"
              placeholder={placeholderFn()}
              onChange={(e: any) => setText(e.target.value)}
              value={text}
            />
          )}
        </div>
        <button
          type="submit"
          disabled={!text}
          className={`btn btn-secondary px-[30px] ml-[-4px] z-10 rounded-s-none ${
            !text ? "pointer-events-none bg-primary" : ""
          }`}
        >
          <FiSearch />
        </button>
      </form>
    </>
  );
};

export default Search;
