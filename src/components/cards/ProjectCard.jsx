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
          <div className="font-bold text-xl mb-2">
            Best Way HR Agency Website Development
          </div>
          <p className="text-gray-700 text-base">
            Description: Designed and developed the frontend for Best Way HR
            Agency, a leading manpower recruitment platform in Nepal, using
            HTML, CSS, and JavaScript. The website focuses on connecting skilled
            professionals with global opportunities, featuring a clean,
            responsive layout that highlights their services, vision, mission,
            and success stories. The user-centric interface was crafted to
            provide seamless navigation and effectively showcase the agency’s
            commitment to excellence in talent recruitment and development. Key
            Features: Responsive Design: Ensured compatibility across various
   
          </p>
        </div>
        <ViewMoreButton />
      </div>
    </>
  );
};

export default ProjectCard;
