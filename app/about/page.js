import Banner from "@/components/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner source="/Beach.png" />
      <div className="p-10 text-center flex-grow">
        {/* Title */}
        <h1
          className="mb-5 text-primary-600 text-2xl font-bold border-b-2 border-dotted border-primary-75
          dark:border-primary-800 md:text-4xl"
        >
          This Project
        </h1>

        {/* Conclusion */}
        <section
          className="my-5 rounded-lg shadow-sm shadow-primary-950 border-2 border-primary-950
          p-4 dark:shadow-primary-50 dark:border-primary-50 md:mt-10 md:px-12"
          id="project-details"
        >
          <h2 className="text-primary-700 text-lg font-semibold text-left mb-2 dark:text-primary-500 md:text-2xl">
            Project Details
          </h2>
          <p className="text-left text-primary-900 dark:text-primary-75">
            This project was developed and designed by me using Next.js and
            styled using Tailwind CSS. All images, including the banners and
            coding language icons, were created from scratch in GIMP. This
            project was created to be a showcase of the skills I've developed
            throughout my coding journey.
          </p>
          <br />
          <h2 className="text-primary-700 text-lg font-semibold text-left mb-2 dark:text-primary-500 md:text-2xl">
            Art & Design
          </h2>
          <p className="text-left text-primary-900 dark:text-primary-75">
            The banner art (art displayed at the top of each page) was created
            by me using GIMP, each one taking about 1 to 1.5 hours each, with no
            outside references. The language-icon graphics on the homepage were
            also designed in GIMP, inspired by the official icons for each
            coding language, but drawn entirely by me.
          </p>
        </section>

        <section
          className="mt-5 rounded-lg shadow-sm shadow-primary-950 border-2 border-primary-950
          p-4 dark:shadow-primary-50 dark:border-primary-50 md:mt-10 md:px-12"
          id="contact"
        >
          <h2 className="text-primary-700 text-lg font-semibold text-left mb-2 dark:text-primary-500 md:text-2xl">
            Contact
          </h2>
          <p className="text-left text-primary-900 dark:text-primary-75">
            You can contact me at:
          </p>
          <ul className="pl-4 font-semibold space-y-1">
            <li className="mb-5">
              <p>Gmail</p>
              <a
                href="mailto:BlueBomber621@gmail.com"
                className="text-primary-600 hover:underline dark:text-primary-500"
              >
                BlueBomber621@gmail.com
              </a>
            </li>
            <li>
              <p>Github</p>
              <a
                href="https://github.com/BlueBomber621"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:underline dark:text-primary-500"
              >
                github.com/BlueBomber621
              </a>
            </li>
          </ul>
        </section>
        <section
          className="mt-5 rounded-lg shadow-sm shadow-primary-950 border-2 border-primary-950
          p-4 dark:shadow-primary-50 dark:border-primary-50 md:mt-10 md:px-12 text-center text-sm"
          id="copyright"
        >
          © {new Date().getFullYear()} Blaine Curtis. All rights reserved.
        </section>
      </div>
    </>
  );
}
