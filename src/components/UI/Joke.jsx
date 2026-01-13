import { useState } from "react";
import GetJoke from "../GetJoke";
import { useEffect } from "react";

const Joke = () => {
  const [joke, setJOke] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const FetchedJoke = async () => {
    try {
      const res = await fetch(
        "https://api.freeapi.app/api/v1/public/randomjokes/joke/random"
      );
      if (!res.ok) throw new Error("faild to fetch");
      const data = await res.json();
      setLoading(false);
      return setJOke(data.data.content);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    FetchedJoke();
    return;
  }, []);
  if (loading) {
    return (
      <div className="text-center p-6">
        <div className="w-24 h-24 border-4 border-dashed rounded-full animate-spin border-[#0b0904] mx-auto"></div>
        <h2 className="text-zinc-900 dark:text-white mt-4">Loading...</h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          I'm getting your joke
        </p>
      </div>
    );
  }
  return (
    <>
      <div className="flex justify-center p-3 flex-col align-middle items-center h-screen">
        <GetJoke joke={joke} />
        <div className="relative inline-flex mt-3 group">
          <button className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></button>
          <button
            onClick={() => FetchedJoke()}
            className="relative inline-flex items-center justify-center px-3 py-2 cursor-pointer text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          >
            Get a new Joke
          </button>
        </div>
      </div>
    </>
  );
};

export default Joke;
