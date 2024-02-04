import CardContainer from "@/components/CardContainer";
import IconLink from "@/components/IconLink";
import Navbar from "@/components/Navbar";
import { Home } from "lucide-react";
import React from "react";

const Bookmark = () => {
  return (
    <div className="flex flex-col gap-2">
      <Navbar>
        <h3 className="text-2xl font-semibold tracking-tight">Bookmarks</h3>
        <IconLink href="/" label="Home">
          <Home size={24} />
        </IconLink>
      </Navbar>
      <CardContainer />
    </div>
  );
};

export default Bookmark;
