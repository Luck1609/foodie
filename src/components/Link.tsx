import React, { ReactNode, HTMLAttributeAnchorTarget } from "react";
import { Link } from "react-router-dom";

export default function LinkItem({
  url,
  target,
  className,
  children,
  ...props
}: {
  url: string,
  target?: HTMLAttributeAnchorTarget | undefined,
  className?: string | null | undefined,
  children: string | ReactNode,
  props?: string | null | undefined
}) {
  return (
    <Link
      to={target ? { pathname: url } : url}
      rel="noopener noreferrer"
      target={target && "_blank"}
      className={className ?? ""}
      {...props}
    >
      {children}
    </Link>
  );
}
