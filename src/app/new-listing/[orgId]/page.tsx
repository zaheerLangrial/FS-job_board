import { getUser } from '@workos-inc/authkit-nextjs'
import { WorkOS } from '@workos-inc/node'
import React from 'react'

type IProps = {
    params: {
        orgId : string;
    }
}

const JobListingOrgIdPage = async ({params}: IProps) => {
    const {user} = await getUser()
    const workos = new WorkOS(process.env.WORKOS_API_KEY);
    if(!user) {
        return 'Please login'
    }
    const orgId = params?.orgId;
    const oms = await workos.userManagement.listOrganizationMemberships({userId : user?.id , organizationId : orgId})
    const hasAccess = oms?.data?.length > 0
    if(!hasAccess) {
        return 'No Access'
    }
  return (
    <form action="" className='mt-6 px-6'>

<pre>
            {JSON.stringify(oms?.data , null , 2)}
        </pre>
        
        <pre>
            {JSON.stringify(hasAccess)}
        </pre>
        <input type="text" placeholder='Job Title' className='border p-2' />
    </form>
  )
}

export default JobListingOrgIdPage