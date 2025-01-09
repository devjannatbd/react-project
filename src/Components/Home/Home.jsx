
import Categories from "../Categories/Categories";
import Findjob from "../Findjob/Findjob";
import Hero from "../Hero/Hero";



import Jobs from "../Jobs/Jobs";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />

      <Findjob />
      <Jobs />
    </div>
  );
};

export default Home;