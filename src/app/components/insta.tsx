import React from "react";
import { FaInstagram } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
import { client } from "@/sanity/lib/client";

interface InstaType{
  text:string,
  imageUrl:string
}

export const DataCategory = async () => {
  const fetchData = await client.fetch(`*[_type == 'category']{
  text,
  "imageUrl":image.asset->url
}
`);
  return fetchData;
};

export const SocialCategory = async () => {
  const data = await DataCategory();

  return (
    <div className="   mt-16 mb-10">
      <h2 className="text-center text-xl font-bold  sm:text-[22px] md:text-[26px] xl:text-[30px]">Follow Me Instagram </h2>
  <h1 className="font-bold text-center text-yellow-700 mb-10 ">@hamzastudio</h1>
      <Carousel>
        <CarouselContent>
          {data.map((val:InstaType, i:number) => {
            return (
              <CarouselItem key={i} className="flex basis-1/2 esx:basis-1/2 sm:basis-1/4 md:basis-1/5 2xl:basis-1/5"   >
                <div className=" relative bg-center bg-cover rounded-lg h-[320px] w-[320px] flex justify-center items-center hover:scale-110  transition duration-300 "  style={{backgroundImage:`url(${val.imageUrl})`}}>
                  <div className="absolute hover:bg-black inset-0 rounded-lg hover:bg-opacity-50 "></div>
                  <div className="relative  z-10">
                  <h3 className=" text-white text-center text-[9.9px] sm:text-[14px] hover:scale-125 hover:cursor-pointer hover:font-semibold hover:underline ">    <FaInstagram  className='text-pink-500 hover-pink-600        w-4 h-4  es:w-5 es:h-5 sm:h-6 sm:w-6     '/></h3>
             
                  </div></div>
              </CarouselItem>
            );
          })}

        </CarouselContent>
      </Carousel>
    </div>
  );
};
