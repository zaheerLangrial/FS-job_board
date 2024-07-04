"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

function RedirectButton() {
    const router = useRouter()
    const handleRedirect = () => {
        router.push('/new-listing')
    }
  return (
    <button onClick={() => handleRedirect()} className=" flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-md">
      Create company <FaArrowRight />
    </button>
  );
}

export default RedirectButton;
