import MovieInfo from "./component/MovieInfo";
import { useState } from "react";

function App() {
  const [data, SetData] = useState<any>({});

  async function fetchmovie(e: any) {
    let url = `https://www.omdbapi.com/?t=${e.target.value}&apikey=967f83fb`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {if (data!=undefined) {SetData(data)}});
  }

  return (
    <div className="h-screen">
      <div className="bg-slate-900 text-white font-bold p-6 shadow-md text-lg">
        <h1>Movie's Search</h1>
      </div>
      <div className="h-full bg-slate-700">
        <div className="p-3 w-full flex items-center justify-center">
        <input
          className="bg-slate-800 focus:outline-none focus:ring rounded-md shadow-sm text-slate-100 py-1 px-5"
          onChange={e=>fetchmovie(e)}
          placeholder="movie name"
        />
        </div>
        <div className="mx-8 my">
        {data["Response"] ? (<MovieInfo db={data} />) : (
          <div className="bg-gray-800 flex  rounded-lg px-5 py-10 text-white  gap-8 items-center justify-center shadow-2xl">Not found, try retyping or correcting spelling.</div>
        )}
        </div>
      </div>
    </div>
  );
}

export default App;
