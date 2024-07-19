import React from "react";
import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
const Recruitment = () => {
  return (
    <div
      id={"Rekrutacja"}
      className={
        "py-9 px-4 md:py-12 md:px-6 lg:py-16 lg:px-20 2xl:container 2xl:mx-auto"
      }
    >
      <h1 className="pb-4 text-3xl font-bold leading-9 text-gray-100 sm:pb-16 lg:text-4xl">
        Rekrutacja
      </h1>
      <p className="mb-8  text-justify text-white md:mb-16 md:text-2xl ">
        Dołącz do naszego zespołu i miej wpływ na przyszłość! Szukamy ambitnych
        i zdeterminowanych osób, które chcą się rozwijać i tworzyć nowe
        rozwiązania. Wypełnij naszą ankietę, aby poznać nas lepiej i pokazać
        nam, co potrafisz. Razem możemy osiągnąć wiele i stworzyć coś, co będzie
        mieć pozytywny wpływ na ludzi i świat wokół nas. Nie czekaj, dołącz do
        nas już dziś i zacznij tworzyć historię!
      </p>
      <motion.h1
        className="mt-16 mb-8 text-center text-white md:mb-16 md:text-2xl "
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        <Balancer>
          <Link
            href={`https://docs.google.com/forms/d/e/1FAIpQLSc13xXDc_4P-HB9YKJlNf1FJTy5ILxON9EwPJJrzeswtYSMxA/viewform?usp=sf_link`}
            target="_blank"
            legacyBehavior>
            <button
              type="button"
              className="mt-2 mb-2 rounded-full bg-white px-8 py-3 text-center text-sm font-medium text-black hover:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              Do dzieła!
            </button>
          </Link>
        </Balancer>
      </motion.h1>
    </div>
  );
};

export default Recruitment;
