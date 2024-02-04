import React, { PropsWithChildren } from "react";

const Navbar = ({ children }: PropsWithChildren) => {
  return <div className="flex justify-between px-4 py-2">{children}</div>;
};

export default Navbar;
