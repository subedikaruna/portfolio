import ViewMoreButton from "../button/ViewMoreButton";

const ProjectCard = () => {
  return (
    <>
      <div className="rounded overflow-hidden shadow-lg pb-6">
        {" "}
        {/* Added pb-6 */}
        <img
          className="w-full"
          src="/karuna-subedi-high-resolution-logo-black.png"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <ViewMoreButton />
      </div>
    </>
  );
};

export default ProjectCard;
