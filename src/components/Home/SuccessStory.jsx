import { useGetAllSuccessStories } from "../../hooks/useGetAllSuccesStories";
import Arrow from "./Arrow";

function SuccessStory() {
  const { data, isLoading, isError, error } = useGetAllSuccessStories();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong: {error?.message || "Unknown error"}</p>;
  }

  return (
    <div className="border border-[#4D4D4D] flex flex-col items-center p-[80px] m-[80px] rounded-2xl">
      <div className="w-full flex justify-start">
        <Arrow count={4} direction="right" />
      </div>
      <div className="my-4 text-center gap-[92px] flex flex-wrap">
        {" "}
        {data.successStory.map((el) => (
          <img
            src={el.image}
            alt={el.name || "Success image"}
            className="w-[305px] h-[190px]"
          />
        ))}
      </div>
      <div className="w-full flex justify-end">
        <Arrow count={4} direction="left" />
      </div>
    </div>
  );
}

export default SuccessStory;
