import React from "react";
import Link from "next/link";
import { getSignInUrl, getUser, signOut } from "@workos-inc/authkit-nextjs";

const Header = async () => {
  const { user } = await getUser();
  const signInUrl = await getSignInUrl();

  return (
    <header className="px-6 py-4">
      <div className="flex justify-between items-center">
        <Link href={"/"} className=" font-bold text-xl">
          Job Board
        </Link>
        <nav className="flex gap-2">
          {!user ? (
            <Link href={signInUrl} className=" bg-gray-200 py-2 px-4 rounded-md">
              Log in
            </Link>
          ) : (
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button type="submit" className=" bg-gray-200 py-2 px-4 rounded-md">
                Log out
              </button>
            </form>
          )}

          <Link href={"/new-listing"} className=" bg-blue-600 text-white py-2 px-4 rounded-md">
            Post a job
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
