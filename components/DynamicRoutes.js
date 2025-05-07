"use client";

import { useState } from "react";
import LinkCard from "@/components/Card";
import { users } from "@/lib/users";

export default function UserList() {
  const pageSize = 4;
  const totalPages = Math.ceil(users.length / pageSize);
  const [page, setPage] = useState(1);

  const start = (page - 1) * pageSize;
  const pageUsers = users.slice(start, start + pageSize);

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-900 rounded-sm">
      <h2 className="font-semibold text-lg md:text-2xl mb-4">
        Users {page} / {totalPages}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {pageUsers.map((user) => (
          <LinkCard
            key={user.id}
            href={`/users/${user.id}`}
            title={`User ${user.id}`}
            description={`${user.name.first} ${user.name.last}`}
          />
        ))}
      </div>

      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-3 py-1 bg-primary-400 text-white rounded disabled:opacity-50"
        >
          ← Previous
        </button>
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="px-3 py-1 bg-primary-400 text-white rounded disabled:opacity-50"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
