import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

export default function LinkItem({
  url,
  target = null,
  className = "",
  children,
  ...props
}: {
  url: string,
  target: any | null | undefined,
  className: string | null | undefined,
  children: string | ReactNode,
  props: string | null | undefined
}) {
  return (
    <Link
      to={target ? { pathname: url } : url}
      rel="noopener noreferrer"
      target={target && "_blank"}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}
