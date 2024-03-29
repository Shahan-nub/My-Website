
export default function BulletTitle({title}) {
  return (
    <div className="text-color-1 flex mb-4 lg:mb-7  gap-1 lg:gap-2">
        <span className="DOT text-white text-lg lg:text-3xl">•</span>
        <span className="font-medium text-xs self-center lg:tex-sm pt-[3px] lg:pt-1">
          {title}
        </span>
      </div>
  )
}
