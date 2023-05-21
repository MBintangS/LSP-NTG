import React from "react";
import Link from "next/link";

const ItemFooter = () => {
    return(
        <div className="flex flex-col">
            <h1 className='head-text-footer'>Menu</h1>
            <div className="line-text-footer" />
            <ul>
                <li className="mb-4">
                    <Link 
                        href="/"
                        className="text-lg font-medium hover:underline" >
                        Layanan Pelanggan
                    </Link>
                </li>
                <li className="mb-4">
                    <Link 
                        href="/"
                        className="text-lg font-medium hover:underline" >
                        Hubungi Kami
                    </Link>
                </li>
                <li className="mb-4">
                    <Link 
                        href="/"
                        className="text-lg font-medium hover:underline" >
                        Bantuan & Pertanyaan Umum
                    </Link>
                </li>
            </ul>
        </div>
    )
};

export default ItemFooter;
