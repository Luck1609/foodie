import React, { ReactNode } from "react";

export default function BaseTemplate({
  content,
  cards,
  className,
}: {
  content: ReactNode;
  cards: ReactNode;
  className: string;
}) {
  return (
    <div className={`w-full ${className} py-28`}>
      <div className="contained md:space-y-16">
        <div className="">{content}</div>

        {cards}
      </div>
    </div>
  );
}
