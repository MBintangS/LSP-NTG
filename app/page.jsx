import React from "react";
import Image from "next/image";
import Link from "next/link";
import Pencapaian from "@components/Pencapaian";
import CaraouselAnggota from "@components/CaraouselAnggota";
import Faq from "@components/faq/Faq";
import {AiOutlineArrowRight, AiOutlinePhone} from 'react-icons/ai'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  return (
    <section className="w-full flex-col pt-16">
      
      {/* // hero section  start*/}
      <div className="grid md:grid-cols-2 pb-8 grid-cols-1 mb-12">
          {/* kiri */}
        <div className="text-center">
          {/* large */}
          <div className="hidden md:flex relative">
            <Image
              src="/assets/images/Logo.svg"
              alt="PNJLogo"
              width={256}
              height={256}
              className="m-auto -z-10"
            >
            </Image>
              <div className="circle"/>
          </div>
          {/* medium */}
          <div className="flex md:hidden">
            <Image
              src="/assets/images/Logo.svg"
              alt="PNJLogo"
              width={128}
              height={128}
              className="m-auto"
            ></Image>
          </div>

          <div className="line-hero"/>
          <div className="text-primary-blue text-xl md:text-4xl font-semibold">LEMBAGA SERTIFIKASI PROFESI</div>
          <div className="md:text-4xl text-xl font-semibold text-gray-500">POLITEKNIK NEGERI JAKARTA</div>
          <div className="btn-hero ">
            <Link href="/" className="inline-flex items-center justify-between w-full">
              <p>DAFTAR SEKARANG</p> 
              <AiOutlineArrowRight />
            </Link>
            </div>
          <div className="line-hero"/>
        </div>

        {/* kanan */}
        <div className="justify-center items-center hidden md:flex">
          <Image 
            src="/assets/images/hero.png"
            alt="Gambar Sertifikasi"
            width={1000}
            height={512}
            className="m-auto rounded-3xl"
          />
        </div>
      </div>
      {/* // hero section  end*/}



      {/* Skema Sertifikasi Start */}
      <div className="grid lg:grid-cols-2 pb-10 grid-cols-1">
        {/* kiri */}
        <div className="hidden lg:flex">
          <Image 
            src="/assets/images/hero.jpg"
            alt="Gambar Sertifikasi"
            width={620}
            height={512}
            className="m-auto rounded-3xl lg:-mx-4 mx-auto"
          />
        </div>

        <div className="flex lg:hidden">
          <Image 
            src="/assets/images/hero.jpg"
            alt="Gambar Sertifikasi"
            width={420}
            height={312}
            className="m-auto rounded-3xl lg:-mx-4 mx-auto pb-5"
          />
        </div>

        {/* kanan */}
        <div className="flex-col flex my-auto ">
          <h1 className="txt-blue">SKEMA SERTIFIKASI</h1>
          <div className="txt-skema">
            <p>SKEMA SERTIFIKASI LSP PPM PNJ</p><br />
            <p>Skema kompetensi yang kami sediakan pada sertifikasi profesi di LSP PPM PNJ.</p><br />
            <ul>
              <li>&bull; Auditor Forensik Korporasi &#40;Corporate Forensic Auditor&#41;</li>
              <li>&bull; Manajer Pengembangan Produk Baru &#40;New Product Development Manager&#41;</li>
              <li>&bull; Sertifikasi Manajer Rantai Pasok &#40;Supply Chain Manager&#41;</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Skema Sertifikasi End */}


      <Pencapaian />

      {/* Anggota Tim Asesor Start */}

      <div className="container-anggota text-center">
        <h1 className="txt-blue w-96 mx-auto mt-20">Anggota Tim Asesor LSP PNJ</h1>
        <p className="font-medium text-secondary-gray text-base px-6 w-450 lg:w-598 mx-auto mb-10">Tim kami terdiri dari Asesor Profesional yang terdiri dari Profesor, Doktor dan Tenaga Ahli pada bidangnya.</p>
      </div>
      <CaraouselAnggota />
      {/* Anggota Tim Asesor End */}

      {/* Hubungi Kami Start */}
      <div className="grid grid-col flex-center lg:text-2xl text-lg my-5 py-5 md:my-10 md:py-20 rounded-3xl bg-white shadow-2xl md:w-[1000px] w-[500px] mx-auto " >
        <div className="text-primary-blue mb-5 p-6 text-center">Hubungi Kami di <span className="text-red-600 font-bold">022-62111111</span> dan dapatkan layanan sertifikasi dari kami.</div>
        <button className="red-btn w-64 mx-auto">
          <div className="w-full mx-auto inline-flex justify-around items-center ">
            <p>Hubungi Kami</p>  
            <AiOutlinePhone /> 
          </div>
        </button>
      </div>

      {/* Hubungi Kami Start */}

      {/* FAQ Start */}

      <Faq />

      {/* FAQ End */}

      {/* Sejarah Kami Start */}

      <div className="grid grid-cols-2">
          <Image
            src="/assets/images/sejarah.png"
            alt="Sejarah LSP"
            width={720}
            height={512}
            className="m-auto rounded-3xl lg:-mx-4 mx-auto"
          />
        <div className="">
          <h1 className="txt-blue">Sejarah Kami</h1>
          <p className="text-justify mx-6 mb-3">Dr. AM. Kadarman SJ, Ketua Jurusan Ekonomi IKIP Sanata Dharma Yogyakarta, memiliki gagasan mendirikan sekolah bisnis seperti Harvard Business School di Indonesia setelah lawatannya ke Eropa. Ia bertemu dengan Mr. FG. Hendricks dan bersama-sama mencari dukungan dari beberapa pengusaha, termasuk pengusaha dari pabrik mobil DAF, dan pejabat Direktorat Kerjasama Teknik Internasional dari Departe­men Luar Negeri Belanda. Pada prinsipnya, pengusaha dan Pemerintah Belanda bersedia memberikan subsidi dengan syarat di Indonesia terdapat badan representatif untuk menampung pelaksanaan gagasan tersebut. Situasi politik di Indonesia saat itu masih mengkhawatirkan, sehingga badan yang akan dibangun harus meredam kerawanan dan konflik yang mungkin akan muncul. Akhirnya, gagasan tersebut mewujud menjadi PPM Manajemen.</p>
          <Link href="/"><p className="flex justify-end mx-6 items-center text-primary-blue hover:underline">Ketahui lebih tentang kami &nbsp;<AiOutlineArrowRight /> </p></Link>
        </div>
      </div>

      {/* Sejarah Kami End */}

    </section>
  );
};

export default Home;
