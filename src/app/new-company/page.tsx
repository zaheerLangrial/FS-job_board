import React from "react";
import { createCompany } from "../actions/workosActions";
import { getUser } from "@workos-inc/authkit-nextjs";
import { FaArrowRight } from "react-icons/fa";

const NewCompanyPage = async () => {
  const { user } = await getUser();
  return (
    <div className="px-6">
      <h2 className=" text-lg mt-6">Create a new company</h2>
      <p className=" text-gray-500 text-sm mb-2">
        To create a job listing your first need to register a company
      </p>
      <form
        action={async (data) => {
          "use server";
          const companyName = data?.get("newCompanyName");
          await createCompany(companyName as string, user?.id as string);
        }}
        className="flex gap-2"
      >
        <input
          name="newCompanyName"
          type="text"
          className=" p-2 border border-gray-400 rounded-md"
        />
        <button className=" flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-md">
          Create company <FaArrowRight />
        </button>
      </form>
    </div>
  );
};

export default NewCompanyPage;
