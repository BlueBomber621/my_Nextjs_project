import Banner from "@/components/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner source={"/Snowstorm.png"} />
      <div className="p-10 text-center flex-grow">
        {/* Title */}
        <h1
          className="mb-5 text-primary-600 text-2xl font-bold border-b-2 border-dotted border-primary-75
        dark:border-primary-800 md:text-4xl"
        >
          About Me
        </h1>

        {/* Area A: Introduction */}
        <h2
          className="text-primary-400 text-left font-bold px-10 text-2xl md:text-3xl"
          id="introduction"
        >
          Introduction
        </h2>

        {/* Section 1A: About Me */}
        <section
          className="mt-5 rounded-lg shadow-sm shadow-primary-950 border-2 border-primary-950
        p-4 dark:shadow-primary-50 dark:border-primary-50 md:mt-10 md:px-12"
          id="experience"
        >
          <h2 className="text-primary-700 text-lg font-semibold text-left mb-2 dark:text-primary-500 md:text-2xl">
            My Experience
          </h2>
          <p className="text-left text-primary-900 dark:text-primary-75">
            I have had an interest in coding since I was young, and the journey
            of learning how to code has been something I've genuinely enjoyed.
            I've found coding is something I quickly pick up; when I learn a{" "}
            <a
              href="#coding-languages"
              className="text-primary-700 hover:underline dark:text-primary-500"
            >
              coding language
            </a>
            , I feel like I can understand well how to put it all together.
            While it may not be a popular opinion, I actually enjoy debugging.
            I've enjoyed debugging because I find it satisfying to apply what
            I've learned to track down where the problem lies, and to solve the
            problems I come across.
          </p>
        </section>

        {/* Thematic Break */}
        <hr className="my-5 border-2 border-dashed border-primary-300" />

        {/* Area B: Coding Languages */}
        <h2
          className="text-primary-400 text-left font-bold px-10 text-2xl md:text-3xl"
          id="coding-languages"
        >
          Coding Languages
        </h2>

        {/* Section 1B: HTML and CSS */}
        <section
          className="mt-5 rounded-lg shadow-sm shadow-primary-950 border-2 border-primary-950
        p-4 dark:shadow-primary-50 dark:border-primary-50 md:mt-10 md:px-12"
          id="html-css"
        >
          <div className="flex">
            <div className="flex-grow">
              <h2 className="text-primary-700 text-lg font-semibold text-left mb-2 dark:text-primary-500 md:text-2xl">
                HTML and CSS
              </h2>
              <p className="text-left text-primary-900 dark:text-primary-75">
                My first real experiences with coding languages were through
                learning HTML and CSS, but with practice, I got a better handle
                on how to use them. I discovered that the more I worked with
                these languages, the more I was able to apply them effectively.
              </p>
            </div>
            <div className="hidden max-w-[100px] w-full md:inline">
              <Image
                src="/HTML-CSS.png"
                alt="HTML and CSS"
                width={600}
                height={720}
                className="w-full h-auto object-center transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* Section 2B: JavaScript */}
        <section
          className="mt-5 rounded-lg shadow-sm shadow-primary-950 border-2 border-primary-950
          p-4 dark:shadow-primary-50 dark:border-primary-50 md:mt-10 md:px-12"
          id="javascript"
        >
          <div className="flex">
            <div className="flex-grow">
              <h2 className="text-primary-700 text-lg font-semibold text-left mb-2 dark:text-primary-500 md:text-2xl">
                JavaScript
              </h2>
              <p className="text-left text-primary-900 dark:text-primary-75">
                After learning{" "}
                <a
                  href="#html-css"
                  className="text-primary-700 hover:underline dark:text-primary-500"
                >
                  HTML and CSS
                </a>{" "}
                code, I moved onto JavaScript (JS), which at the time felt much
                more complicated by comparison. What I enjoyed most about
                learning JavaScript was being able to add real functionality to
                my projects.
              </p>
            </div>
            <div className="hidden max-w-[100px] w-full md:inline">
              <Image
                src="/JS.png"
                alt="JavaScript"
                width={600}
                height={720}
                className="w-full h-auto object-center transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* Section 3B: NodeJS */}
        <section
          className="mt-5 rounded-lg shadow-sm shadow-primary-950 border-2 border-primary-950
        p-4 dark:shadow-primary-50 dark:border-primary-50 md:mt-10 md:px-12"
          id="node"
        >
          <div className="flex">
            <div className="flex-grow">
              <h2 className="text-primary-700 text-lg font-semibold text-left mb-2 dark:text-primary-500 md:text-2xl">
                Node.js
              </h2>
              <p className="text-left text-primary-900 dark:text-primary-75">
                Node.js was my first dive into more advanced web development
                tools. I initially learned it using React, but I later
                transitioned to Next.js, which I found to be the most efficient
                of the two.
              </p>
            </div>
            <div className="hidden max-w-[100px] w-full md:inline">
              <Image
                src="/Node.png"
                alt="Node"
                width={600}
                height={720}
                className="w-full h-auto object-center transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* Section 4B: Python */}
        <section
          className="mt-5 rounded-lg shadow-sm shadow-primary-950 border-2 border-primary-950
        p-4 dark:shadow-primary-50 dark:border-primary-50 md:mt-10 md:px-12"
          id="python"
        >
          <div className="flex">
            <div className="flex-grow">
              <h2 className="text-primary-700 text-lg font-semibold text-left mb-2 dark:text-primary-500 md:text-2xl">
                Python
              </h2>
              <p className="text-left text-primary-900 dark:text-primary-75">
                After working with{" "}
                <a
                  href="#javascript"
                  className="text-primary-700 hover:underline dark:text-primary-500"
                >
                  JavaScript
                </a>{" "}
                and{" "}
                <a
                  href="#node"
                  className="text-primary-700 hover:underline dark:text-primary-500"
                >
                  Node.js
                </a>
                , I continued on to learning Python. What stood out to me was
                the wide range of tools Python offers. I started off learning
                functions like the `input()` command, and eventually expanded to
                frameworks like Flask and Tkinter.
              </p>
            </div>
            <div className="hidden max-w-[100px] w-full md:inline">
              <Image
                src="/Python.png"
                alt="Node"
                width={600}
                height={720}
                className="w-full h-auto object-center transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* Section 5B: SQL */}
        <section
          className="mt-5 rounded-lg shadow-sm shadow-primary-950 border-2 border-primary-950
          p-4 dark:shadow-primary-50 dark:border-primary-50 md:mt-10 md:px-12"
          id="sql"
        >
          <div className="flex">
            <div className="flex-grow">
              <h2 className="text-primary-700 text-lg font-semibold text-left mb-2 dark:text-primary-500 md:text-2xl">
                SQL
              </h2>
              <p className="text-left text-primary-900 dark:text-primary-75">
                I picked up SQL more quickly than most languages. I especially
                enjoyed tinkering with data using{" "}
                <a
                  href="https://www.mysql.com/"
                  className="text-primary-700 hover:underline dark:text-primary-500"
                >
                  MySQL
                </a>{" "}
                as my database management system. I learned how to manage
                databases with MySQL in{" "}
                <a
                  href="#python"
                  className="text-primary-700 hover:underline dark:text-primary-500"
                >
                  Python
                </a>{" "}
                too.
              </p>
            </div>
            <div className="hidden max-w-[100px] w-full md:inline">
              <Image
                src="/SQL.png"
                alt="SQL"
                width={600}
                height={720}
                className="w-full h-auto object-center transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
