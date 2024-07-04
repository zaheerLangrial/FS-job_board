import JobForm from "@/app/components/JobForm";
import { getUser } from "@workos-inc/authkit-nextjs";
import { WorkOS } from "@workos-inc/node";


export type IProps = {
  params: {
    orgId: string;
  };
};

const JobListingOrgIdPage = async ({ params }: IProps) => {
  const { user } = await getUser();
  const workos = new WorkOS(process.env.WORKOS_API_KEY);
  if (!user) {
    return "Please login";
  }
  const orgId = params?.orgId;
  const oms = await workos.userManagement.listOrganizationMemberships({
    userId: user?.id,
    organizationId: orgId,
  });
  const hasAccess = oms?.data?.length > 0;
  if (!hasAccess) {
    return "No Access";
  }
  return (
    <JobForm orgId={orgId} />
  );
};

export default JobListingOrgIdPage;
