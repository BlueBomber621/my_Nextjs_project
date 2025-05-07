import { notFound } from "next/navigation";
import { users } from "@/lib/users";
import Banner from "@/components/Banner";

export function generateStaticParams() {
  return users.map((u) => ({ id: u.id.toString() }));
}

export default async function Page({ params }) {
  const { id } = await params;
  const user = users.find((u) => u.id.toString() === id);
  if (!user) return notFound();
  return (
    <>
      <Banner source={"/Lake.png"} />
      <div className="p-10 text-center flex-grow">
        {/* Title */}
        <h1
          className="mb-5 text-primary-600 text-2xl font-bold border-b-2 border-dotted border-primary-75
        dark:border-primary-800 md:text-4xl"
        >
          User: {user.name.first} {user.name.last}
        </h1>
        <div className="p-6 space-y-4">
          <div className="w-full flex flex-col justify-around gap-2 md:flex-row">
            <div className="flex flex-col">
              <p className="text-center font-semibold">
                Name: {user.name.first} {user.name.last}
              </p>
              <p className="text-center">Gender: {user.gender}</p>
              <p className="text-center">Age: {user.dob.age}</p>
              <p className="text-center">Account Age: {user.registered.age}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-center font-semibold">
                City: {user.location.city}
              </p>
              <p className="text-center">Nationality: {user.nat}</p>
              <p className="text-center">Email: {user.email}</p>
              <p className="text-center">Phone: {user.phone}</p>
            </div>
          </div>
          <a
            href="/projects"
            className="text-sm text-primary-500 hover:underline"
          >
            ← Back to all projects
          </a>
        </div>
      </div>
    </>
  );
}
