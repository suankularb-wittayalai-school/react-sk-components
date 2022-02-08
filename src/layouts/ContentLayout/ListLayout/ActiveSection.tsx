import React, { ReactNode } from "react"

export interface ActiveSectionProps {
  children: ReactNode;
}

const ActiveSection = ({ children }: ActiveSectionProps) => (
  <div className="content-layout--list__main">{children}</div>
)