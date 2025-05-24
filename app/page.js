import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-[100vh] justify-center align-middle items-center flex">
      <img
        src="./gambar.png"
        alt="Uploaded preview"
        className="w-[70%] object-cover rounded-lg"
      />
    </div>
  );
}
