"use client"

import React, { useState } from 'react'
import AccordionItem from './AccordionItem'


export default function Faq() {

  const [open, setOpen] = useState(false)
  const toggle = (index) => {
    if(open === index){
      return setOpen(null)
    }

    setOpen(index)
  }

  const accordionData = [
    {
      title: "Bagaimana cara mendaftar di sistem LSP?",
      desc: "Untuk mendaftar di sistem LSP, calon peserta sertifikasi harus mengunjungi situs web LSP resmi dan melakukan pendaftaran akun. Setelah akun terdaftar, peserta dapat mengisi formulir aplikasi untuk sertifikasi yang diinginkan."
    },
    {
      title: "Apa yang harus dilakukan jika lupa kata sandi atau memiliki masalah teknis dengan sistem LSP?",
      desc: "Dapat menghubungi tim dukungan teknis LSP melalui nomor telepon atau email yang tersedia di situs web LSP."
    },
    {
      title: "Bagaimana cara mengunduh sertifikat dari sistem LSP?",
      desc: "Untuk mengunduh sertifikat dari sistem LSP, peserta sertifikasi kompeten dapat langsung mengunduh sertifikat dalam format PDF melalui halaman status kompetensi di akun mereka di sistem LSP."
    },
  ]

  return (
    <div>
        <h1 className='txt-blue text-center pt-[48px]'>Ini beberapa pertanyaan umum yang sering ditanyakan (FAQ).</h1>
        <div className='pb-20'>
          {accordionData.map((data, index) => {
            return (
              <AccordionItem 
                key={index} 
                open={index === open} 
                title={data.title} 
                desc={data.desc} 
                toggle={() => toggle(index)}/>
            );
          })}
        </div>
    </div>
  )
}
