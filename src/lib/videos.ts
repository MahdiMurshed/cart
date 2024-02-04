export type Video = {
    imgUrl: string;
    title: string;
    id: string;
    bookmarked?: boolean;
}

export const getCommonVideos = async (url:string) => {
    try {
      const baseUrl = "https://youtube.googleapis.com/youtube/v3";
      const res = await fetch(`${baseUrl}/${url}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`);
      const data = await res.json();
  
      if (data.error) {
        console.log(data.error.message);
      }
      const vids:Array<Video> = data.items.map((item:any) => ({
        imgUrl: item.snippet.thumbnails.high.url,
        title: item.snippet.title,
        id: item.id?.videoId || item.id,
      }));
      return vids;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  
  export const getVideos = async () => {
    const url = `search?part=snippet&maxResults=25&q=disney trailers`;
    return getCommonVideos(url);
  };
  export const getPopularVideos = async () => {
    const url = `videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US`;
  
    return getCommonVideos(url);
  };