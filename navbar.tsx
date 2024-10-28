import React from "react";
import Link from "next/link";
import Events from "../component/navbar";
export default function Navbar() {
    return (
       <div className="bg-blue-200 flex justify-center space-x-4">
        <Link href="/about" className="hover:text-red-500"> About </Link>
       
       <Link href="/blogs" className="hover:text-red-500"> Blogs </Link>
       
        <Link href="/events" className="hover:text-red-500"> Events </Link>
        
       <Link href="/contact" className="hover:text-red-500"> Contacts </Link>
       
       <Link href="/gallery" className="hover:text-red-500"> Gallery </Link>
    </div>
    
        );
}