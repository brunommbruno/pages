import ProjectCard from "./ProjectCard";

const Home = () => {
  return (
    <div className="home">
      <section className="projects">
        <ProjectCard
          title="Sign Up Page"
          description="Simple themed sign up page with password re-type verification"
          image="https://i.gyazo.com/a9c179b48e934a191b6db6b92886e2cc.png"
          route="sign-up"
        />
        <ProjectCard
          title="Sign Up Page"
          description="Simple themed sign up page with password re-type verification"
          image="https://i.gyazo.com/a9c179b48e934a191b6db6b92886e2cc.png"
        />
        <ProjectCard
          title="Sign Up Page"
          description="Simple themed sign up page with password re-type verification"
          image="https://i.gyazo.com/a9c179b48e934a191b6db6b92886e2cc.png"
        />
      </section>
    </div>
  );
};

export default Home;
