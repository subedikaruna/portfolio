import ProjectCard from "../components/cards/ProjectCard";
import TypeWriterCard from "../components/cards/TypeWriterCard";
import Footer from "../components/navbar/Footer";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar></Navbar> <TypeWriterCard></TypeWriterCard>
      
        <ProjectCard></ProjectCard>
       
     
      <Footer></Footer>
    </>
  );
};
export default Home;
