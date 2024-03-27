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
      This is dashboard page
    </div>
  )
}

export default page
