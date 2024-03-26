import { GoDotFill } from "react-icons/go";

export default function MacOSlights() {
  return (
    <div className="w-full hidden md:inline-block border-t rounded-t-xl h-[10%] bg-gradient-to-r from-[#3b3b3b] via-[#b2afa3] to-[#3b3b3b] ">
          <div className=" flex gap-[6px] pl-4 pt-[5px] items-center">
            <div className="relative flex">
              <GoDotFill className="text-[#c05848]  rounded-full text-2xl" />
              <div className="absolute left-1/3 top-2 text-transparent shadow-[0_0_20px_4px_#c05848] rounded-full leading-[3px]">
                .
              </div>
            </div>
            <div className="relative flex">
              <GoDotFill className="text-[#f4bd4f]  rounded-full text-2xl" />
              <div className="absolute left-1/3 top-2 text-transparent shadow-[0_0_20px_4px_#f4bd4f] rounded-full leading-[3px]">
                .
              </div>
            </div>
            <div className="relative flex">
              <GoDotFill className="text-[#57c353]  rounded-full text-2xl" />
              <div className="absolute left-1/3 top-2 text-transparent shadow-[0_0_20px_4px_#57c353] rounded-full leading-[3px]">
                .
              </div>
            </div>
          </div>
        </div>
  )
}
