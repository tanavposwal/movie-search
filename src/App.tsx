import { useQueryState } from "nuqs";
import MovieInfo from "./component/MovieInfo";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";

function App() {
  const [search, setSearch] = useQueryState("s");
  const [data, setData] = useState({});

  useEffect(() => {
    if (search) {
      fetchmovie({ target: { value: search } });
    }
  }, [search]);

  async function fetchmovie(e: any) {
    let url = `https://www.omdbapi.com/?t=${e.target.value}&apikey=967f83fb`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }

  return (
    <div className="h-screen bg-black select-none">
      <div className="text-white font-bold px-8 py-4 text-lg border-b border-neutral-700">
        <h1>Movie's Search</h1>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center mt-8 max-w-screen-lg px-10 mx-auto">
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
        <div className="border border-neutral-700 rounded-md overflow-hidden">
          {search ? (
            <MovieInfo data={data} />
          ) : (
            <div className="p-10 text-white items-center justify-center">
              search for movie...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
