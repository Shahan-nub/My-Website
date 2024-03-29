
export default function Headings({normalText,spanText,NTextSize,NTSmobile,STextSize,STSmobile}) {
  return (
    <div className={`INTRO text-white font-medium lg:text-[2.5rem] leading-10 text-4xl `}>
            {normalText}  <br />
            <span className={`font-semibold italic text-transparent bg-clip-text bg-gradient-to-b from-[#eeeeee] via-white to-[#4d4d4d] `}>
              {spanText}
            </span>
    </div>
  )
}
