import React, { ReactNode } from 'react'

export default function Btn({ className, children }: { className: string, children: ReactNode }) {
  return (
    <button className={className}>{ children }</button>
  )
}
