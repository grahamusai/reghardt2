import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = ["Company", "About Us", "Team", "Events", "News & Updates"];

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        <div className="flex !w-full py-20 mb-5 md:mb-20 flex-col justify-center !items-center bg-gray-900 max-w-6xl mx-auto rounded-2xl p-5 ">
          <h2
            className="text-2xl md:text-3xl text-center font-bold text-white"
          >
            Join now and get 30% OFF!
          </h2>
          <p
            color="white"
            className=" md:w-7/12 text-center text-white my-3 !text-base"
          >
            Don&apos;t miss out on this exclusive offer that will end soon.
          </p>
          <div className="flex w-full md:w-fit gap-3 mt-2 flex-col md:flex-row">
            <button className="text-white">buy ticket</button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <a href="#" target="_blank" className="text-gray-900">
            <Image
              src="/images/logo.png"
              alt="logo"
              height={736}
              width={387}
              className="h-10 w-[5rem] md:h-10 md:w-[5rem]"
            />
          </a>
          <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {LINKS.map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  color="white"
                  className="font-normal !text-gray-700 hover:!text-gray-900 transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex w-fit justify-center gap-2">
            <div color="gray">
              <FaXTwitter />
            </div>
            <div color="gray">
              <FaYoutube />
            </div>
            <div color="gray">
              <FaInstagram />
            </div>
          </div>
        </div>
        <div
          color="blue-gray"
          className="text-center mt-12 font-normal !text-gray-700"
        >
          &copy; {CURRENT_YEAR} developed by{" "}
          <a href="#" target="_blank">
            11 Dogs
          </a>
          .
        </div>
      </div>
    </footer>
  );
}

export default Footer;
