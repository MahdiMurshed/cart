import { Video } from "@/lib/videos";
import React from "react";

const useVideos = () => {
  const [videos, setVideos] = React.useState<Array<Video>>([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const getVideos = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/video");
        const data = await res.json();
        setVideos(data.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    getVideos();
  }, []);
  return {
    videos,
    loading,
  };
};

export default useVideos;
