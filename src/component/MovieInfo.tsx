import {
  Calendar,
  Clock,
  DollarSign,
  Globe,
  Star,
  ThumbsUp,
  Trophy,
  User,
} from "lucide-react";

export default function MovieInfo({ data }: { data: any }) {
  function htm() {
    let h: any = Math.floor(parseInt(data["Runtime"]) / 60);
    let m: any = parseInt(data["Runtime"]) % 60;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    return h + ":" + m;
  }
  const convertGenreToTags = () => {
    if (!data["Genre"]) return [];
    return data["Genre"].split(',')
      .map((genre: string) => genre.trim())
      .filter((genre: string) => genre.length > 0);
  };

  return (
    <div className="flex md:gap-8 gap-4 text-white p-4">
      {/* Hero Section */}
      <div className="relative rounded-xl border overflow-hidden border-neutral-700 w-fit">
        <img
          src={data["Poster"]}
          draggable={false}
          className="w-fit h-fit object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-[rgba(0,0,0,0)]">
          <h1 className="text-xl font-bold">{data["Title"]}</h1>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="space-y-6">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-gray-400" />
              <span>{htm()} hrs</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span>{data["imdbRating"]}/10</span>
            </div>
            <div className="flex items-center space-x-2">
              <ThumbsUp className="w-5 h-5 text-blue-500" />
              <span>{data["imdbVotes"]}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {convertGenreToTags().map((genre: string) => (
              <span className="px-3 py-1 bg-gray-800 rounded-full text-xs">{genre}</span>
            ))}
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2 overflow-x-auto">
              <User className="w-5 h-5 text-gray-400" />
              <span>Director: {data["Director"]}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-gray-400" />
              <span>Release: {data["Released"]}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-gray-400" />
              <span>Language: {data["Language"]}</span>
            </div>
            <div className="flex items-center space-x-2">
              <DollarSign className="w-5 h-5 text-gray-400" />
              <span>Box Office: {data["BoxOffice"]}</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 p-6 rounded-md">
          <div className="flex items-start space-x-4">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <div className="-mt-2">
              <h3 className="text-lg font-semibold">
                Awards & Nominations
              </h3>
              <p className="text-gray-400 text-sm">{data["Awards"]}</p>
            </div>
          </div>
          <div className="mt-2">
            <p className="text-gray-400">Origin: {data["Country"]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
