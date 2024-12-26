import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { client } from "@/sanity/lib/client";
interface CategoryType{
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

export const Carousel1 = async () => {
  const data = await DataCategory();

  return (
    <div id="carouselpage" className=" w-[220px] es:w-[250px] esx:w-[370px]  sm:w-[470px] md:w-[550px] lg:w-[700px] xl:w-[800px] 2xl:w-[1000px]  m-auto mt-16">
      <h2 className="text-center text-xl font-bold mb-6 sm:text-[22px] md:text-[26px] xl:text-[30px] hover:scale-110 transition duration-300 hover:underline">Choose a Category</h2>
      <Carousel>
        <CarouselContent>
          {data.map((val:CategoryType , i:number) => {
            return (
              <CarouselItem key={i} className="flex basis-1/2 esx:basis-1/3 sm:basis-1/5 md:basis-1/6 2xl:basis-1/7"   >
                <div className=" relative bg-center bg-cover rounded-lg h-[120px] w-[120px] esx:w-[170px] esx:[170px]  sm:h-[140px]  md:h-[120px] lg:h-[150px] lg:w-[180px]  xl:h-[180px] xl:w-[250px] flex justify-center items-center hover:scale-110  transition duration-300 "  style={{backgroundImage:`url(${val.imageUrl})`}}>
                  <div className="absolute bg-black inset-0 rounded-lg bg-opacity-50 sm:bg-opacity-45"></div>
                  <div className="relative z-10">
                  <h3 className=" text-white text-center text-[9.9px] sm:text-[14px] hover:scale-105  cursor-pointer hover:font-semibold hover:underline ">{val.text}</h3>
             
                  </div></div>
              </CarouselItem>
            );
          })}

        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};