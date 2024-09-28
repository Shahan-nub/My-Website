import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

export default function Links() {
  return (
    <div className="LINKS hidden lg:flex items-center gap-3 lg:gap-5">
            <Link href="https://www.linkedin.com/in/shahan-ali-anwer"
             className="text-white flex items-center cursor-pointer">
                <div className="mr-1">
                    LinkedIn
                </div>
                <MdArrowOutward></MdArrowOutward>
            </Link>
            <Link href="https://github.com/Shahan-nub" className="text-white flex items-center cursor-pointer">
                <div className="mr-1">
                    Github
                </div>
                <MdArrowOutward></MdArrowOutward>
            </Link>
        </div>
  )
}
