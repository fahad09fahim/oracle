import { curve, heroBackground, robot } from "../assets";
import Section from "./Section";
import Button from "./Button";

const Hero = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative">
        <div className="relative  z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">
            Unleash the wisdom of AI. Supercharge your productivity with
            <span className="inline-block relative ms-1">
              The Oracle{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                alt="curved"
                width={624}
                height={28}
              />
            </span>
            , the AI chat app.
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8 ">
            Upgrade your productivity with Oracle, the open AI chat app.
          </p>
          <Button
            href="/pricing"
            white
            className="animate-pulse hover:animate-none "
          >
            Get Started
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
               <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                  <div className="relative bg-n-8 rounded-[1rem]">
                    <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]"/>
                    <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                        <img src={robot} className="w-full scale-[1.7] -translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%] " width={1024} height={490} alt="robot" />
                    </div>
                  </div>
               </div>
               <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%] ">
                <img src={heroBackground} className="w-full opacity-15" width={1440} height={1800} alt="heroBackground" />
               </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
