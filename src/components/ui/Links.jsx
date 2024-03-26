import { MdArrowOutward } from "react-icons/md";

export default function Links() {
  return (
    <div className="LINKS hidden lg:flex items-center gap-3 lg:gap-5">
            <div className="text-white flex items-center">
                <div className="mr-1">
                    LinkedIn
                </div>
                <MdArrowOutward></MdArrowOutward>
            </div>
            <div className="text-white flex items-center">
                <div className="mr-1">
                    Github
                </div>
                <MdArrowOutward></MdArrowOutward>
            </div>
        </div>
  )
}
