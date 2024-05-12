import { check, service1, service2, service3 } from "../assets";
import { oracleServices, oracleServicesIcons } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

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
              <p className="body-2 mb-[3rem] text-n-2/9">
                The Oracle unlocks the potential of AI-powered applications
              </p>
              <ul className="body-2">
                {oracleServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-end py-4 border-t border-n-4 gap-[1.4rem]"
                  >
                    <img src={check} alt="" />
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative border border-n-1/10 min-h-[39rem] overflow-hidden rounded-3xl ">
              {/* insert image into the div */}
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="w-full h-full object-cover"
                  width={630}
                  height={750}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h2 className="h2 mb-4">Photo editing</h2>
                <p className="body-2 mb-[3rem] text-n-2/9">
                  Automatically enhance your photos using our AI app&apos;s
                  photo editing feature. Try it now!
                </p>
              </div>
              <PhotoChatMessage />
            </div>
            <div className="p-4 overflow-hidden rounded-3xl lg:min-h-[46rem] bg-n-7">
              <div className="py-12 px-4 xl:px-8">
                <h2 className="h2 mb-4">Video generation</h2>
                <p className="body-2 mb-[2rem] text-n-3">
                  The world’s most powerful AI photo and video art generation
                  engine. What will you create?
                </p>
                <ul className="flex items-center justify-between">
                  {oracleServicesIcons.map((item, index) => (
                    <li
                      className={`flex justify-center items-center 5 bg-n-9/15 hover:bg-conic-gradient p-0.5 rounded-2xl h-[3rem] w-[3rem] md:h-[4.5rem] md:w-[4.5rem]  `}
                      key={index}
                    >
                      <div className="flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]">
                        <img src={item} alt="" />
                      </div>
                    </li>
                  ))}
                </ul>
                {/* inner image  */}
                <div className="relative my-2 h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                  <img
                    src={service3}
                    className="w-full h-full object-cover"
                    width={520}
                    height={400}
                    alt=""
                  />
                  <VideoChatMessage />
                  <VideoBar />
                </div>
                <Gradient />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
