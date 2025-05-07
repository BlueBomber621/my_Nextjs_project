import ApiFetcher from "@/components/APIFetcher";
import Authentication from "@/components/Authentication";
import Banner from "@/components/Banner";
import CrudList from "@/components/CRUDList";
import DynRoutes from "@/components/DynamicRoutes";

export default function Projects() {
  return (
    <>
      <Banner source={"/Lake.png"} />
      <div className="p-10 text-center flex-grow">
        {/* Title */}
        <h1
          className="mb-5 text-primary-600 text-2xl font-bold border-b-2 border-dotted border-primary-75
        dark:border-primary-800 md:text-4xl"
        >
          Projects
        </h1>

        {/* Project 1: CRUD Operations */}
        <h2
          className="text-primary-400 text-left font-bold px-10 text-2xl md:text-3xl"
          id="crud-operations"
        >
          CRUD operations
        </h2>
        <p className="text-left text-primary-900 dark:text-primary-75">
          This project displays use of CRUD operations.
        </p>
        <section
          className="mt-5 rounded-lg shadow-sm shadow-primary-950 border-2 border-primary-950
        p-4 dark:shadow-primary-50 dark:border-primary-50 md:mt-10 md:px-12"
        >
          <CrudList />
        </section>

        {/* Thematic Break */}
        <hr className="my-5 border-2 border-dashed border-primary-300" />

        {/* Project 2: API Fetching */}
        <h2
          className="text-primary-400 text-left font-bold px-10 text-2xl md:text-3xl"
          id="api-fetching"
        >
          Fetching API Data
        </h2>
        <p className="text-left text-primary-900 dark:text-primary-75">
          This project displays the functionality of fetching data from an API.
        </p>
        <section
          className="mt-5 rounded-lg shadow-sm shadow-primary-950 border-2 border-primary-950
        p-4 dark:shadow-primary-50 dark:border-primary-50 md:mt-10 md:px-12"
        >
          <ApiFetcher />
        </section>

        {/* Thematic Break */}
        <hr className="my-5 border-2 border-dashed border-primary-300" />

        {/* Project 3: Authentication */}
        <h2
          className="text-primary-400 text-left font-bold px-10 text-2xl md:text-3xl"
          id="authentication"
        >
          Authentication
        </h2>
        <p className="text-left text-primary-900 dark:text-primary-75">
          This project displays authentication functionality with login and
          session memory of login.
        </p>
        <section
          className="mt-5 rounded-lg shadow-sm shadow-primary-950 border-2 border-primary-950
          p-4 dark:shadow-primary-50 dark:border-primary-50 md:mt-10 md:px-12"
        >
          <Authentication />
        </section>

        {/* Thematic Break */}
        <hr className="my-5 border-2 border-dashed border-primary-300" />

        {/* Project 4: Dynamic Routes */}
        <h2
          className="text-primary-400 text-left font-bold px-10 text-2xl md:text-3xl"
          id="dynamic-routes"
        >
          Dynamic Routes
        </h2>
        <p className="text-left text-primary-900 dark:text-primary-75">
          This project displays the use of Next.js' dynamic routing function.
        </p>
        <section
          className="mt-5 rounded-lg shadow-sm shadow-primary-950 border-2 border-primary-950
          p-4 dark:shadow-primary-50 dark:border-primary-50 md:mt-10 md:px-12"
        >
          <DynRoutes />
        </section>
      </div>
    </>
  );
}
