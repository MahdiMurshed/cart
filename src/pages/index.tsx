import IconLink from "@/components/IconLink";
import CategorySelect from "@/components/CategorySelect";
import Navbar from "@/components/Navbar";
import { Bookmark } from "lucide-react";
import CardContainer from "@/components/CardContainer";
import useVideos from "@/hook/useVideos";

export default function Home() {
  const bookmarkCount = 2;
  const { videos, loading } = useVideos();
  return (
    <div className="flex flex-col gap-2">
      <Navbar>
        <h3 className="text-2xl font-semibold tracking-tight">Home</h3>
        <div className="flex gap-4 items-center">
          <CategorySelect />
          <IconLink href="/bookmarks" label="Bookmarks">
            <div className="relative">
              <Bookmark size={24} />
              <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-yellow-300 text-blue-800 text-sm">
                {bookmarkCount}
              </span>
            </div>
          </IconLink>
        </div>
      </Navbar>
      <CardContainer data={videos} />
    </div>
  );
}
