import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefit from "./components/Benefit";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.75rem] overflow-hidden">
        <Header />
        <Hero/>
        <Benefit/>
        <Services/>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
