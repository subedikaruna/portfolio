import ProjectCard from "../components/cards/ProjectCard";
import TypeWriterCard from "../components/cards/TypeWriterCard";
import Footer from "../components/navbar/Footer";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar></Navbar> <TypeWriterCard></TypeWriterCard>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </div>
      <Footer></Footer>
    </>
  );
};
export default Home;
