import { getUser } from "@workos-inc/authkit-nextjs";
import {
  AutoPaginatable,
  OrganizationMembership,
  WorkOS,
} from "@workos-inc/node";
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const NewListingPage = async () => {
  const { user } = await getUser();

  if (!user) {
    return (
      <div>
        <div>You need to be logged in to post a job.</div>
      </div>
    );
  }

  const workos = new WorkOS(process.env.WORKOS_API_KEY);
  let organizationMemberShips: AutoPaginatable<OrganizationMembership> =
    await workos.userManagement.listOrganizationMemberships({
      userId: user?.id,
    });

  const activeOrganizationMemberShips = organizationMemberShips.data.filter(
    (om) => om.status === "active"
  );
  const organizationsNames: { [key: string]: string } = {};

  for (const activeMemberShip of activeOrganizationMemberShips) {
    const organization = await workos.organizations.getOrganization(
      activeMemberShip.organizationId
    );
    organizationsNames[organization.id] = organization.name;
  }

  return (
    <div className="px-6">
      {/* <pre>{JSON.stringify(organizationMemberShips, null, 2)}</pre> */}
      <div>
        <h2 className="text-lg mt-6">Your companies</h2>
        <p className="text-gray-500 text-sm mb-2">
          Select a company to create a job add for
        </p>
        <ul className="flex flex-col gap-2">
          {Object.keys(organizationsNames).map((orgId) => (
            <Link
              href={"/new-listing/" + orgId}
              className="border flex items-center gap-2 w-fit py-2 px-4"
            >
              {organizationsNames?.[orgId]} <FaArrowRight />
            </Link>
          ))}
        </ul>

        {organizationMemberShips.data.length === 0 && (
          <div className="border border-blue-200 bg-blue-50 p-4 rounded-md">
            No companies found assigned to your user
          </div>
        )}

        <Link
          href={"/new-company"}
          className="gap-2 bg-gray-200 px-4 py-2 rounded-md mt-6 inline-block"
        >
          Create a new company
        </Link>
      </div>
    </div>
  );
};

export default NewListingPage;
