import { useLocation } from "react-router-dom";
import logo from "../assets/oracle-logo.svg";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
  const pathName = useLocation();
  const [open, setOpen] = useState(false);
  const toggle = () => {
    if (open) {
      setOpen(false);
      enablePageScroll()
    } else {
      setOpen(true);
      disablePageScroll();
    }
  };
  const handleClick = () => {
    if(!open) return;
    enablePageScroll();
    setOpen(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        open ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className=" block w-[12rem] xl:mr-8" href="#hero">
          <img src={logo} width={190} height={40} alt="oracle" />
        </a>
        <nav
          className={` ${
            open ? "flex" : "hidden"
          }  fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent `}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((link) => (
              <a
                key={link.id}
                href={link.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  link.onlyMobile ? "lg:hidden" : ""
                }
                px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  link.url === pathName.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                }
                lg:leading-5 lg:hover:text-n-1 xl:px-12
                `}
              >
                {link.title}
              </a>
            ))}
          </div>
            <HamburgerMenu />
        </nav>
        <a
          href="#signUp"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </a>
        <Button className="hidden lg:flex  animate-pulse hover:animate-none" href="#login">
        
          <span>Sign in</span>
        </Button>
        <Button onClick={toggle} className="ml-auto lg:hidden px-3">
          <MenuSvg open={open} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
