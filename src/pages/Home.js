import TitleSection from "../components/sections/TitleSection";
import AboutSection from "../components/sections/AboutSection";
import TeamSection from "../components/sections/TeamSection";
import TeamsAdvertiseSection from "../components/sections/TeamsAdvertiseSection";
import NewsSection from "../components/sections/NewsSection";

function Home() {
  return (
    <div className="bg-black">
      <TitleSection />
      {/* About Section */}
      <AboutSection />
      {/* Team Section */}
      <TeamSection />
      <TeamsAdvertiseSection />
      <NewsSection />
    </div>
  );
}

export default Home;