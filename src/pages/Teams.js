import TeamDivision from "../components/sections/TeamDivision";
import QuantSection from "../components/sections/QuantSection";
import EquitiesSection from "../components/sections/EquitiesSection";

function Teams() {
  return (
    <div className="bg-white min-h-screen">
      <TeamDivision />
      <QuantSection />
      <EquitiesSection />
    </div>
  );
}

export default Teams;