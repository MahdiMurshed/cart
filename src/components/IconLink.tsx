import { Bookmark } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  label: "Home" | "Bookmarks";
  href: string;
  children: React.ReactNode;
};

const IconLink = ({ href, label, children }: Props) => {
  return (
    <Link href={href}>
      <div className="flex flex-col items-center">
        {children}
        <p className="text-xs tracking-wider">{label}</p>
      </div>
    </Link>
  );
};

export default IconLink;
