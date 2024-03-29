import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
export default function EducationCard({ degree, place,link }) {
  return (
    <div className="w-full flex flex-col gap-2 my-5 lg:my-8">
      <div className="flex justify-between items-center">
        <h4 className="text-xs lg:text-sm text-white font-medium">{degree} &nbsp;</h4>
      <Link href={link}><MdArrowOutward className="text-[#e4e4e4]"></MdArrowOutward></Link>
      </div>
        <p className="text-xs lg:text-sm text-color-1 font-light w-[85%] lg:w-full">
          - &nbsp; {place}
        </p>
    </div>
  );
}
