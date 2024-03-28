import UserTable from '@/components/table/UserTable';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Dashboard",
  description: "This is Dashboard page",
  keywords: ['shop', 'ecommerce', 'sell']
};
const page = () => {
  return (
    <div>
      <UserTable/>
    </div>
  )
}

export default page
