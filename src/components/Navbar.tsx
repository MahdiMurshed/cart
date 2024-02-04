import React, { PropsWithChildren } from "react";

const Navbar = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex justify-between border-b px-4 py-2 items-center">
      {children}
    </div>
  );
};

export default Navbar;
