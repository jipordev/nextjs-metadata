
import { log } from 'console'
import React from 'react'
export type ParamProps = {
    params: {
      id: number
    }
}

async function getDetail(id: number) {
  const productDetail = await fetch(`https://dummyjson.com/products/${id}`)
  return productDetail.json()
}

export async function generateMetadata({params} : ParamProps){
  const id = params.id
  const product = await getDetail(id)
  return {
    title: product?.title,
    describe: product.description,
    openGraph: {
      images: product.thumbnail,
    },
  }
}

async function page({ params }: ParamProps) {
  const id = params.id;
  const productDetail = await getDetail(id)
  console.log(getDetail(id));
  
  return (
    <div className='w-max container mx-auto text-center'>
      <h1 className='font-bold text-4xl'>Product title: 


      {productDetail.title}</h1>
       
    </div>
  )
}

export default page

