"use client"
import Image from "next/image";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const handleClick = () => {
    window.location.href = 'https://api.whatsapp.com/send?phone=6281330082008&text=Halo,%20pevesindo.co.id%20saya%20berminat%20dengan%20plafon%20pvc%20dari%20Pevesindo';
  };

  return (
    <div className="w-full h-[100vh] justify-center align-middle items-center flex p-[10rem]">
      <div>
        <div className="space-y-[1rem]">
          <div className="w-full flex justify-center">
            <img
              src="https://res.cloudinary.com/unm/image/upload/v1748230971/gambar_cgo6lg.png"
              alt="Uploaded preview"
              className="w-[70%] object-cover rounded-lg"
            />
          </div>
          <div className="w-full flex justify-center">
            <p className="w-[70%] text-center">Hubungi CS Kami dengan klik tombol dibawah untuk tanya-tanya lebih dulu tentang plafon PVC, wall panel WPC, lantai SPC, lantai vinyl, lis moulding, lis plint, dan masih banyak lagi</p>
          </div>
          <div className="w-full flex justify-center">
            <button onClick={handleClick} className="bg-green-600 text-white py-[1rem] px-[10rem] rounded-md transition-colors duration-300 hover:bg-green-500 " link="" >WA CS</button>
          </div>
        </div>
      </div>
    </div>
  );
}
