import Image from "next/image";

export const AppLink = () => {
  return (
    <div className="p-5">
      <div className="font-bold text-[17px] text-center mb-2">
        আমাদের মোবাইল অ্যাপস ডাউনলোড করুন
      </div>
      <div className="flex items-center justify-center gap-4">
        <a
          href="https://play.google.com/store/apps/details?id=com.m4yours.news24onbd"
          rel="nofollow"
          target="_blank"
        >
          <Image
            src="/misc/google-play.webp"
            alt="google-play"
            title="google-play"
            width={130}
            height={40}
          />
        </a>
        <a
          href="https://apps.apple.com/app/24onbd/id6450661284"
          rel="nofollow"
          target="_blank"
        >
          <Image
            src="/misc/app-store.webp"
            alt="app-store"
            title="app-store"
            width={130}
            height={40}
          />
        </a>
      </div>
    </div>
  );
};

export default AppLink;
