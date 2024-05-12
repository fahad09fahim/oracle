import { check, service1 } from "../assets";
import { oracleServices, oracleServicesIcons } from "../constants";
import Heading from "./Heading";
import Section from "./Section";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title={"Generative AI Made for creators."}
          text="The Oracle unlocks the potential of AI-powered applications."
        />
        <div className="relative">
          <div className="relative z-1 h-[39rem] flex items-center p-8 mb-5 border border-n-1/9 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                src={service1}
                className="w-full h-full object-cover md:object-right"
                height={730}
                width={800}
                alt="service1"
              />
            </div>
            <div className="relative z-1 ml-auto max-w-[17rem] ">
              <h2 className="h2 mb-4">Smartest AI</h2>
              <p className="body-2 mb-[3rem] text-n-2/9">The Oracle unlocks the potential of AI-powered applications</p>
              <ul className="body-2">
                {oracleServices.map((item, index) => (
                  <li key={index} className="flex items-end py-4 border-t border-n-4 gap-[1.4rem]">
                    <img src={check} alt="" />
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
