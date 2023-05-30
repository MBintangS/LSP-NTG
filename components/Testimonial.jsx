import React from "react";
import Image from "next/image";
import { LuQuote } from "react-icons/lu";

export const testimonialData = [
    {
        desc: `Saya merasa senang menjadi asesi di LSP PNJ karena tim di sana ramah,
        profesional, dan selalu siap membantu. Sistem manajemen data dan
        dokumentasi mereka sangat efisien dan mudah digunakan, membuat tugas
        saya sebagai asesi menjadi lebih mudah.`,
        asesi: "- Rina Asesi 2023",
        foto: "/assets/images/asesor.jpg"
    },
    {
        desc: `"Asesi di LSP PNJ memberikan pengalaman yang sangat berharga dan profesional. Saya merekomendasikan LSP PNJ kepada siapa saja yang ingin memperoleh sertifikasi yang diakui secara nasional."`,
        asesi: "- Rina Asesi 2023",
        foto: "/assets/images/asesor.jpg"
    },
    {
        desc: `“LSP PNJ memberikan pengalaman profesional dan efisien. Saya merekomendasikan LSP PNJ kepada siapa saja yang ingin mendapatkan sertifikasi yang diakui secara nasional.”.`,
        asesi: "- Rina Asesi 2023",
        foto: "/assets/images/asesor.jpg"
    },
]

const Testimonial = ({desc, asesi, foto}) => {
  return (
    <div className="w-[360px]">
      <div className="relative w-[327px] h-[418px] bg-white rounded-xl shadow-2xl hover:rotate-1">
        <p className="p-6">
          <LuQuote className="text-4xl" /> <br />
          {desc}
        </p>
        <h1 className="p-6">{asesi}</h1>

        <Image
          src={foto}
          alt="Testimoni Asesi"
          width={200}
          height={200}
          className="absolute bottom-[-48px] right-[-48px] w-[150px] h-[150px] rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Testimonial;
