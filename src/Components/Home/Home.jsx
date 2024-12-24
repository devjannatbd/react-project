
import Categories from "../Categories/Categories";
import Hero from "../Hero/Hero";
import JobDetails from "../Jobs/JobDetails";
import Jobs from "../Jobs/Jobs";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Jobs />
      <JobDetails />
    </div>
  );
};

export default Home;