import React, { useEffect, useState } from "react";
import { fetchVideos } from "../services/movies";

const VideoContainer = ({ movie }) => {
  const [videos, setVideos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id, original_title, overview } = movie;

  useEffect(() => {
    async function getVideos() {
      setIsLoading(true);
      try {
        const apiVideos = await fetchVideos(id);
        setVideos(apiVideos.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    getVideos();
  }, [id]);

  const video = React.useMemo(() => {
    return videos?.find((vid) => {
      return vid.type === "Trailer";
    });
  }, [videos]);

  const videoId = video?.key;
  if (isLoading) return <div>Loading...</div>;
  if (!video) return null;

  return (
    <div className="relative pb-[56.25%] z-[1]">
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&loop=1`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
      ></iframe>
      <div
        className="absolute text-white top-[40%] max-w-lg left-16 flex flex-col gap-4"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
      >
        <h1 className="text-5xl font-bold">{original_title}</h1>
        <h3>{overview}</h3>
        <div className="flex gap-4">
          <button className="bg-slate-200 text-slate-900 px-8 py-4 opacity-90 rounded-md hover:bg-slate-400">
            Play
          </button>
          <button className="bg-slate-700 text-slate-200 px-8 py-4 opacity-90 rounded-md hover:bg-slate-900">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};


export default VideoContainer;
