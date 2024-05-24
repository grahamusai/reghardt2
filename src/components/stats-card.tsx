
import { Typography, Card } from "@material-tailwind/react";
interface StatsCardProps {
  count: string;
  title: string;
}

export function StatsCard({ count, title }: StatsCardProps) {
  return (
    <div color="transparent">
      <h1  className="font-bold text-[42px] text-gray-800" color="blue-gray">
        {count}
      </h1>
      <h6  color="blue-gray" className="mt-1 font-medium">
        {title}
      </h6>
    </div>
  );
}


export default StatsCard;
