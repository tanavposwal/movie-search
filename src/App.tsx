import { useQueryState } from "nuqs";
import MovieInfo from "./component/MovieInfo";
import { Search } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

async function fetchmovie(keyword: string) {
  let url = `https://www.omdbapi.com/?t=${keyword}&apikey=967f83fb`;
  return (await fetch(url)).json();
}

function Loading() {
  return (
    <svg
      width="40"
      height="10"
      viewBox="0 0 120 30"
      xmlns="http://www.w3.org/2000/svg"
      fill="#fff"
    >
      <circle cx="15" cy="15" r="15">
        <animate
          attributeName="r"
          from="15"
          to="15"
          begin="0s"
          dur="0.8s"
          values="15;9;15"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          from="1"
          to="1"
          begin="0s"
          dur="0.8s"
          values="1;.5;1"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="60" cy="15" r="9" fill-opacity="0.3">
        <animate
          attributeName="r"
          from="9"
          to="9"
          begin="0s"
          dur="0.8s"
          values="9;15;9"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          from="0.5"
          to="0.5"
          begin="0s"
          dur="0.8s"
          values=".5;1;.5"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="105" cy="15" r="15">
        <animate
          attributeName="r"
          from="15"
          to="15"
          begin="0s"
          dur="0.8s"
          values="15;9;15"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          from="1"
          to="1"
          begin="0s"
          dur="0.8s"
          values="1;.5;1"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

function App() {
  const [search, setSearch] = useQueryState("s");

  const { data, isLoading, error } = useQuery({
    queryKey: ["movie", search],
    queryFn: () => fetchmovie(search!),
    enabled: !!search,
  });

  return (
    <div className="min-h-screen bg-black select-none">
      <div className="text-white font-bold px-8 py-4 text-lg border-b border-neutral-700">
        <h1>Movie's Search</h1>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center sm:mt-8 mt-4 max-w-screen-lg sm:px-10 px-5 mx-auto">
        <div className="relative w-full h-full">
          <Search className="w-5 h-5 text-gray-400 absolute top-[50%] translate-y-[-50%] left-4" />
          <input
            className="bg-neutral-800 focus:outline-none rounded-md shadow text-neutral-100 w-full pl-12 px-6 py-3 border border-neutral-700"
            type="text"
            value={search ?? ""}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="movie name"
          />
        </div>
        <div className="sm:border border-neutral-700 rounded-md overflow-hidden w-full">
          {search ? (
            isLoading ? (
              <div className="p-16 text-white flex items-center justify-center">
                <Loading />
              </div>
            ) : error ? (
              <div className="p-16 text-white flex items-center justify-center">
                error...
              </div>
            ) : (
              <MovieInfo data={data} />
            )
          ) : (
            <div className="p-16 text-white flex items-center justify-center">
              search for movie...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
