import DashboardSkeleton from '@/app/ui/skeletons'
import React from 'react'

//Aqui solo aplica al dashboard y no a invoices and customers
const Loading = () => {
  return (
    <div>
        <DashboardSkeleton/>
      
    </div>
  )
}

export default Loading

