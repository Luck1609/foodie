import React, { ReactNode } from 'react'

export default function Btn({ className, children, click, ...props }: { className?: string, children: ReactNode, click?: () => void | null, props?: any  }) {
  return (
    <button className={className} onClick={click} {...props}>{ children }</button>
  )
}
