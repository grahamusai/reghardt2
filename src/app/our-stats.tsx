"use client";

import { Typography } from "@material-tailwind/react";
import StatsCard from "@/components/stats-card";

const STATS = [
  {
    count: "1,500+",
    title: "Participants",
  },
  {
    count: "50",
    title: "Speakers",
  },
  {
    count: "20+",
    title: "Workshops",
  },
  {
    count: "3",
    title: "Days",
  },
];

export function OurStats() {
  return (
    <section className="container mx-auto grid gap-10 px-8 py-44 lg:grid-cols-1 lg:gap-20 xl:grid-cols-2 xl:place-items-center">
      <div>
        <h6 className="mb-1 font-medium text-purple-600">
          Our Stats
        </h6>
        <h2
          className="text-5xl text-gray-800 font-bold leading-tight lg:w-3/4"
        >
          Lorem Ipsum
        </h2>
        <h3
          className="mt-3 w-full !text-gray-500 lg:w-9/12"
        >
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum voluptates ducimus accusantium at vero, ut laudantium accusamus soluta ipsam impedit.
        </h3>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-8 gap-x-28">
          {STATS.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurStats;
