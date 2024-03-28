import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "./assets/images/logo.svg";

// eslint-disable-next-line no-useless-escape
const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

function App() {
  const [emailInput, setEmailInput] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  useEffect(() => {
    if (emailInput.length >= 5 && !emailRegex.test(emailInput)) {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
    }
  }, [emailInput]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmailInput(e.target.value);

  return (
    <main className="flex w-full flex-col items-center">
      <div className="flex w-full max-w-[645px] flex-col items-center px-10">
        <img
          src={logo}
          alt="Logo"
          className="mt-20 h-4 w-14 md:h-[26px] md:w-[88px]"
        />
        <motion.h1
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "tween", ease: "circOut" }}
          className="mt-10 overflow-hidden text-[22px] text-userGray md:mt-12 md:text-5xl"
        >
          We are launching{" "}
          <span className="font-bold text-userVeryDarkBlue">soon!</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-4 text-sm text-userVeryDarkBlue md:mt-6 md:text-xl"
        >
          Subscribe and get notified
        </motion.h2>
        <div className="relative mt-8 flex w-full flex-col md:mt-12 md:flex-row md:gap-x-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email address..."
            value={emailInput}
            onChange={handleInputChange}
            className={`
          w-full rounded-full border border-userPaleBlue px-8 py-3 
            placeholder:text-sm placeholder:text-userPaleBlue focus:outline-userBlue md:w-2/3 md:py-4 md:placeholder:text-base
            ${!isValidEmail && "border-userLightRed !outline-userLightRed"}
            `}
          />
          {!isValidEmail && (
            <span className="-bottom-6 left-10 mb-6 mt-2 text-center text-sm text-userLightRed md:absolute md:mb-0 md:mt-0">
              Please provide a valid email address
            </span>
          )}
          <button
            type="submit"
            className="
            mt-3 w-full rounded-full bg-userBlue py-3 text-sm font-semibold text-white shadow-lg 
            shadow-blue-100/70 hover:brightness-110 md:mt-0 md:w-1/3 md:py-4 md:text-base"
          >
            Notify Me
          </button>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 2,
          duration: 0.7,
          type: "tween",
          ease: "backOut",
        }}
        className="mt-20 w-full px-6"
      >
        <div
          className="
          mx-auto h-[220px] w-full max-w-[645px] bg-dashboard-pattern bg-contain bg-center 
          bg-no-repeat md:h-[390px]
          "
        />
      </motion.div>
      <footer className="absolute bottom-8 left-1/2 w-full -translate-x-1/2">
        <div className="flex justify-center gap-x-4 text-userBlue">
          <button
            type="button"
            aria-label="facebook"
            className="
            flex h-10 w-10 items-center justify-center rounded-full border border-userPaleBlue
            hover:border-0 hover:bg-userBlue hover:text-white
            "
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </button>
          <button
            type="button"
            aria-label="twitter"
            className="
            flex h-10 w-10 items-center justify-center rounded-full border border-userPaleBlue
            hover:border-0 hover:bg-userBlue hover:text-white
            "
          >
            <FontAwesomeIcon icon={faTwitter} />
          </button>
          <button
            type="button"
            aria-label="instagram"
            className="
            flex h-10 w-10 items-center justify-center rounded-full border border-userPaleBlue
            hover:border-0 hover:bg-userBlue hover:text-white
            "
          >
            <FontAwesomeIcon icon={faInstagram} />
          </button>
        </div>
        <p className="mt-10 text-center text-xs text-userGray md:text-sm">
          &copy; Copyright Ping, All rights reserved.
        </p>
      </footer>
    </main>
  );
}

export default App;
