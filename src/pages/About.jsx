import Footer from "../components/navbar/Footer";
import Navbar from "../components/navbar/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <section className=" max-w-screen-xl bg-white mt-10 mx-auto p-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          About Me
        </h1>

        {/* Profile Image 720x540 */}
        <div className="flex justify-center mb-6">
          <img
            className="w-full h-[540px] object-cover bg-black"
            src="/IMG-20231205-WA0000.png"
            alt="Karuna Subedi"
          />
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Who I Am
          </h2>
          <p className="text-gray-600">
            I am Karuna Subedi, a passionate web developer with a keen interest
            in creating seamless, user-friendly applications. My journey into
            web development began with curiosity and has grown into a
            full-fledged career, where I aim to bring innovative ideas to life.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            My Values
          </h2>
          <p className="text-gray-600">
            Integrity, creativity, and continuous learning are at the core of
            everything I do. I believe in building applications that not only
            look great but also solve real-world problems in an efficient
            manner.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Skills & Expertise
          </h2>
          <p className="text-gray-600">
            I specialize in full-stack web development with a focus on
            JavaScript frameworks like React and Node.js. Additionally, I have
            hands-on experience with CSS frameworks like Tailwind CSS and
            utility-first CSS methodologies, creating responsive and dynamic
            user interfaces.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            My Passion for Technology
          </h2>
          <p className="text-gray-600">
            Technology is constantly evolving, and I love keeping up with new
            trends, tools, and frameworks. Whether it’s learning TypeScript or
            diving deeper into Express.js, I’m always eager to expand my skill
            set and stay ahead of the curve.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Personal Life
          </h2>
          <p className="text-gray-600">
            Outside of work, I enjoy exploring new cuisines, going for walks,
            and trying new dishes.I have always been fascinated with stars and
            moon and always been interested about planets and solar system.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Future Goals
          </h2>
          <p className="text-gray-600">
            In the near future, I aspire to grow my skills further in full-stack
            development and venture into machine learning. I’m excited about the
            endless possibilities the tech world holds and where my career
            journey will take me.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
