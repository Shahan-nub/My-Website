export default function MyJourneyText({ title, desc }) {
  return (
    <div className="flex flex-col px-6 my-12 ">
      <h4 className="text-white ">{title}</h4>
      <p className="text-color-1 mt-4 font-extralight">{desc} </p>
    </div>
  );
}
