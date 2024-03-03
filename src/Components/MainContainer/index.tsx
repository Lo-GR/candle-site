import React from 'react'

type Props = {
  children: React.ReactNode
  classN?: string
}

const MainContainer = ({ children, classN }: Props) => {
  return (
    <div className={`sm:max-w-[600px] lg:max-w-[900px] xl:max-w-[1200px] ${classN}`}>
      {children}
    </div>
  )
}

export default MainContainer