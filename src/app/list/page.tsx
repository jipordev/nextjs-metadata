'use client'
 
import { Metadata } from 'next'
import { useSearchParams } from 'next/navigation'

const metadata: Metadata = {
  icons: {
    icon: "/assets/pic.jpg",
  },
  title: "List",
  description: "This is list page shop",
  keywords: ['shop', 'ecommerce', 'sell']
};
 
export default function SortProducts() {
  const searchParams = useSearchParams()
 
  function updateSorting(sortOrder: string) {
    const params = new URLSearchParams(searchParams.toString())
    params.set('sort', sortOrder)
    window.history.pushState(null, '', `?${params.toString()}`)
  }
 
  return (
    <>
      <button onClick={() => updateSorting('asc')}>Sort Ascending</button>
      <button onClick={() => updateSorting('desc')}>Sort Descending</button>
    </>
  )
}