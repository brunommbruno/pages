import ProjectCard from "./ProjectCard";

const Home = () => {
  return (
    <div className="home">
      <section className="projects">
        <ProjectCard
          title="Test Project"
          description="This is a test project description"
          image="https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/ael6vr3wsyatqcrzxzg1.jpg"
        />
      </section>
    </div>
  );
};

export default Home;
