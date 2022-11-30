import LatestCode from "components/LatestCode";
import FavouriteProjects from "components/FavouriteProjects";
import HeroSection from "components/HeroSection";

export default function Home(props) {
  return (
    <>
      <HeroSection />
      <FavouriteProjects />
      <LatestCode repositories={props.repositories} />
    </>
  );
}
