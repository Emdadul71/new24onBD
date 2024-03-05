"use client";
import addArray from "../../../../helpers/data/ad_array_sidesm.json";
import { getRandomIndex } from "../../../../helpers/utils";
import { useEffect, useState } from "react";
import Advertisement from "..";

const AdvertisementSideSm = () => {
  const [randomIndex, setRandomIndex] = useState(1);

  // const randomIndex = getRandomIndex(addArray);
  const randomElement = addArray[randomIndex];

  useEffect(() => {
    setRandomIndex(getRandomIndex(addArray));
  }, []);

  return (
    <Advertisement
      width={300}
      height={250}
      src={randomElement.src}
      url={randomElement.url}
    />
  );
};

export default AdvertisementSideSm;
