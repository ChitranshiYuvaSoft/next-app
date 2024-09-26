import React from 'react'

const page = ({params}) => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-between flex-col py-8 bg-slate-300">
      Product Page {params.productId}
    </div>
  )
}

export default page
