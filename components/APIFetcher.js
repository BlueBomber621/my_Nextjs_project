"use client";

import { useState } from "react";

export default function ApiFetcher() {
  const [user, setUser] = useState(null);

  return (
    <>
      <div className="p-2 flex flex-col items-center gap-2 bg-gray-100 rounded-sm dark:bg-gray-900">
        <button
          className="mx-2 px-4 py-2 bg-primary-300 text-white rounded hover:bg-primary-400 dark:bg-primary-200 dark:hover:bg-primary-100"
          onClick={() => {
            fetch("https://randomuser.me/api/")
              .then((response) => response.json())
              .then((data) => setUser(data.results[0]));
          }}
        >
          Generate User
        </button>
        {user && (
          <div className="flex flex-col self-stretch justify-around gap-2 md:flex-row">
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
        )}
      </div>
    </>
  );
}
