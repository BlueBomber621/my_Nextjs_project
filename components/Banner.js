import Image from "next/image";

export default function Banner({ source }) {
  return (
    <div className="relative w-full h-64 shadow-sm shadow-primary-50">
      <Image
        src={source}
        alt="Banner"
        fill
        className="object-cover object-center rounded-t-lg md:rounded-t-none"
      />
    </div>
  );
}
