import React from "react";
import Link from "next/link";

const ItemJadwal = () => {
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-2">
      <Link href="/">
        <div className="itemjadwal">01 Sept 2023</div>
      </Link>
      <Link href="/">
        <div className="itemjadwal">10 Nov 2023</div>
      </Link>
      <Link href="/">
        <div className="itemjadwal">17 Des 2023</div>
      </Link>
    </div>
  );
};

const JadwalFooter = () => {
  return (
    <div>
      <h1 className="head-text-footer">
        Jadwal Assesment Terkini
      </h1>
      <div className="line-text-footer" />
      <ItemJadwal />
    </div>
  );
};

export default JadwalFooter;
