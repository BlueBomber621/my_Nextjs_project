import Link from "next/link";

export default function LinkCard({ title, description, href }) {
  return (
    <Link
      href={href}
      className={
        "block p-3 sm:p-4 border-2 rounded-lg border-primary-300 dark:border-primary-800 bg-primary-50 dark:bg-primary-950 hover:bg-primary-75 dark:hover:bg-primary-900 hover:shadow-lg transition duration-200"
      }
    >
      <h3 className="text-lg sm:text-xl font-semibold text-primary-600 dark:text-primary-400">
        {title}
      </h3>
      <p className="mt-1 text-sm sm:text-base text-primary-900 dark:text-primary-75">
        {description}
      </p>
    </Link>
  );
}
