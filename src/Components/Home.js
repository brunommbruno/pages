import ProjectCard from "./ProjectCard";

const Home = () => {
  document.title = "Bruno Bruno - Pages";
  return (
    <div className="home">
      <section className="projects">
        <ProjectCard
          title="Sign Up Page"
          description="Simple themed sign-up page with identical password verification using Bootstrap forms and local state."
          image="https://i.gyazo.com/a9c179b48e934a191b6db6b92886e2cc.png"
          route="sign-up"
        />
        <ProjectCard
          title="Restaurant Reservation Page"
          description="A simple reservation page with options to input a name, email, date, hour, and amount of people."
          image="https://i.imgur.com/Z6kxMG4.jpg"
          route="reservation"
        />
        <ProjectCard
          title="Sign Up Page"
          description="Simple themed sign-up page with identical password verification using Bootstrap forms and local state."
          image="https://i.gyazo.com/a9c179b48e934a191b6db6b92886e2cc.png"
          route="sign-up"
        />
      </section>
    </div>
  );
};

export default Home;
