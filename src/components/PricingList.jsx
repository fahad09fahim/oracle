import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((price) => (
        <div
          id={price.id}
          key={price.id}
          className="w-[19rem] max-lg:w-full h-full p-6 bg-n-6 border border-n-5 rounded-[2rem] lg:w-auto even:py-14 odd:py-8  odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <h4 className="h4 mb-4">{price.title}</h4>
          <p className="body-2 min-h-[4rem] mb-3 text-n-4">
            {price.description}
          </p>
          <div className="flex items-center h-[5.5rem]">
            {price.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {price.price}
                </div>
              </>
            )}
          </div>
          <Button
            className="w-full mb-6"
            href={price.price ? "/pricing" : "mailto:info@oracle.org"}
            white={!price.price}
          >
            {price.price ? "Get started" : "Contact us"}
          </Button>
          <ul>
            {price.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center border-t border-n-5 py-4"
              >
                <img src={check} width={24} height={24} alt="" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
